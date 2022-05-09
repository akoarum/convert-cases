#!/usr/bin/env node
const { program } = require('commander')
const { workspace, updateWorkspace } = require('./utils')

const main = async () => {
  program.parse(process.argv)

  try {
    const ws = await workspace()
    let version

    if (['PATCH', 'MINOR', 'MAJOR'].includes(program.args[0])) {
      const [major, minor, patch] = ws.version.split('.').map((v) => Number(v))
      if (program.args[0] === 'PATCH') version = `${major}.${minor}.${patch + 1}`
      if (program.args[0] === 'PATCH') version = `${major}.${minor + 1}.0`
      if (program.args[0] === 'PATCH') version = `${major + 1}.0.0`
    } else {
      version = program.args[0]
    }

    await updateWorkspace({
      ...ws,
      version,
    })
  } catch (error) {
    console.error(error)
    process.exit(2)
  }
}

if (require.main === module) {
  main()
}
