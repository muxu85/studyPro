// js模块需要nodeJS环境

const fs = require('fs')
const { resolve } = require('path')
 
//  回调函数形式
// fs.readFile('./test/content.txt', (err, data) => {
//   if (err) throw err
//   console.log(data)
//   console.log(data.toString())
// })

// Promise实现
let p = new Promise((resolve, reject) => {
  // 异步任务
  fs.readFile('./test/content.txt', (err, data) => {
    if (err) reject(err)
    resolve(data)
  })
}) 

// promise对象p调用then,对结果进行处理
p.then(val => {
  console.log(val.toString())
}, reason => {
  console.log(reason)
})
