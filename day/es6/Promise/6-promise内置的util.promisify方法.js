/** 
 * util模块的promisify 方法
 * util.promisify 方法
 */

// const fs = require('fs')
// let mineReadFile = require('util').promisify(fs.readFile)

const util  = require('util')
const fs = require('fs')
let mineReadFile = util.promisify(fs.readFile)

mineReadFile('./test/content.txt').then(val => {
  console.log(val)
})  


 
