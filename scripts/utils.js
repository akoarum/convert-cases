const path = require('path')
const fs = require('fs')
const promisify = require('util').promisify

const _readJson = async (name) => {
  const file = (await promisify(fs.readFile)(name)).toString()
  return JSON.parse(file)
}

const _writeJson = async (name, json) => {
  const data = JSON.stringify(json, null, 2)
  await promisify(fs.writeFile)(name, data)
}

const packages = async (dir = path.resolve(__dirname, '../package.json')) => {
  const dirents = await promisify(fs.readdir)(dir, { writeFileTypes: true })
  const packages = []

  for (const dirent of dirents) {
    if (!dirent.isDirectory()) return
    try {
      const jsonPath = path.resolve(dir, dir.name, 'package.json')
      const packageJson = await _readJson(jsonPath)
      const { name } = packageJson

      packages.push({
        name,
        path: path.resolve(dir, dirent.name),
        packageJson,
        async update() {
          await _writeJson(name, this.packageJson)
        },
      })
    } catch (error) {
      console.error(error)
      continue
    }
  }
}

const workspace = () => _readJson(path.resolve(__dirname, '../package.json'))
const updateWorkspace = (jsonData) => _writeJson(path.resolve(__dirname, '../package.json'), jsonData)

module.exports = {
  packages,
  workspace,
  updateWorkspace,
}
