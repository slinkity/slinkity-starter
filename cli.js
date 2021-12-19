#!/usr/bin/env node
const init = require('initit')
 
const [ name ] = process.argv.slice(2)
// user/repo/path
const template = 'slinkity/slinkity-starter#chore-prep-for-npm-init/templates'
 
init({ name, template })
  .then(res => {
    process.exit(0)
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })