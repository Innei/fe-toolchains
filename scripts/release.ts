import chalk from 'chalk'
import consola from 'consola'
import minimist from 'minimist'
import prompts from 'prompts'
import semver from 'semver'
import { $ } from 'zx'

import { version } from '../package.json'
import { getVersionChoices, packages, updateVersion } from './utils'

const args = minimist(process.argv.slice(2))
export const isDryRun = !!args.dry

async function main() {
  let targetVersion: string

  const { release }: { release: string } = await prompts({
    type: 'select',
    name: 'release',
    message: 'Select release type',
    choices: getVersionChoices(version),
  })

  if (release === 'custom') {
    const res: { version: string } = await prompts({
      type: 'text',
      name: 'version',
      message: 'Input custom version',
      initial: version,
    })
    targetVersion = res.version
  } else {
    targetVersion = release
  }

  if (!semver.valid(targetVersion))
    throw new Error(`invalid target version: ${targetVersion}`)

  const { yes }: { yes: boolean } = await prompts({
    type: 'confirm',
    name: 'yes',
    message: `Releasing ${chalk.yellow(targetVersion)} Confirm?`,
    initial: true,
  })

  if (!yes) return

  console.log()
  consola.info('Updating packages version...')
  updateVersion('package.json', targetVersion)
  packages.forEach((name) => {
    updateVersion(`packages/${name}/package.json`, targetVersion)
  })

  if (!isDryRun) {
    console.log()
    consola.info('Committing changes...')
    console.log()
    await $`git add -A`
    await $`git commit -m "release: v${targetVersion}"`
    await $`git tag v${targetVersion}`

    console.log()
    consola.info('Pushing to GitHub...')
    console.log()
    await $`git push`
    await $`git push origin --tags`
  }
}

main().catch((e) => {
  console.log(e)
})
