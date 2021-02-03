// 剑指 Offer 58 - I. 翻转单词顺序
// 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

// 示例 1：
// 输入: "the sky is blue"
// 输出: "blue is sky the"

// 示例 2：
// 输入: "  hello world!  "
// 输出: "world! hello"
// 解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

// 示例 3：
// 输入: "a good   example"
// 输出: "example good a"
// 解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。

// 说明：
// 无空格字符构成一个单词。
// 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
// 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。


// const arr = "the sky is blue."
// const arr = "     hello world!     "
const arr = "a good      example"
let array = arr.trim().split(' ')
console.log(array, 'array')
// for (var i = 0; i < array.length/2; i++) {
//   let temp;
//   temp = array[i]
//   array[i] = array[array.length - 1 - i]
//   array[array.length - 1 - i] = temp
// }
let a = array.filter(item => item!='').reverse().join(' ')
console.log(a, '0');



// 利用es6解决
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.trim().split(' ').filter(item => item!= '').reverse().join(' ')
  };


// 总结：
// trim去掉空格 

