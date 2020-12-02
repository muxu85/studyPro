/* 
 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。
*/

/* 
示例 1：
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。

示例 2:
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。

示例 3:
输入：digits = [0]
输出：[1]
*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function (digits) {
//   console.log(digits) // [ 9, 3, 0, 9 ]
//   console.log(digits.join('')) // 9309
//   // 数值6145390195186705544超出Number基本类型的容纳范围，改用BigInt基本类型
  // let num = BigInt(digits.join(''));
  // console.log(num) // 9309n
  // // BigInt基本类型进行数学操作时，需要在数字字面量后加个n
  // let string = String(num + 1n);
  // console.log(string) // 9310
  // let ary = string.split('');
  // console.log(ary, 'pp') // [ '9', '3', '1', '0' ] 'pp'
  // let arr =  ary.map(str => Number(str));
  // console.log(arr, '0') // [ 9, 3, 1, 0 ] '0'

  // return ary.map(str => Number(str));
// };

// const arr = [9,3,0,9]
// console.log(plusOne(arr))

var plusOne = function (digits) {
  let num = BigInt(digits.join('')) + 1n
  let n = String(num).split('')
  let nums = n.map(val => Number(val))
  return nums
}

console.log(plusOne([0,0]))
