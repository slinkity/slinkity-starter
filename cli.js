#!/usr/bin/env node
const path = require('path')
const fs = require('fs')
const { yellow, red } = require('kolorist')

console.log('Copying files...')

// TODO: make edit-able via CLI
const target = 'my-slinkity'
const srcRoot = path.join(__dirname, 'templates/react')
const destRoot = path.join(process.cwd(), target)
fs.mkdirSync(destRoot)
// TODO: add "plain" starter alongside "react"
const templateFilePaths = fs.readdirSync(srcRoot)

for (const templateFilePath of templateFilePaths) {
  const src = path.join(srcRoot, templateFilePath)
  const dest = path.join(destRoot, templateFilePath)
  copy(src, dest)
}

/**
 * Util to copy file or file directory to dest
 * Taken from https://github.com/vitejs/vite/blob/main/packages/create-vite/index.js
 * @param {string} src
 * @param {string} dest
 */
function copy(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

/**
 * Util to copy file directory to test
 * Taken from https://github.com/vitejs/vite/blob/main/packages/create-vite/index.js
 * @param {string} srcDir 
 * @param {string} destDir 
 */
function copyDir(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

console.log(`Welcome to your first ${yellow('Slinkity site!')}`)
console.log('Step 1: run these commands to install and serve locally:')
console.log(`yarn
yarn start`)
console.log(`Step 2: ${red('have fun ❤️')}`)