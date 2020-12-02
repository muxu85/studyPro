
// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

// 注意：

// num1 和num2 的长度都小于 5100.
// num1 和num2 都只包含数字 0-9.
// num1 和num2 都不包含任何前导零。
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。



function zero(num) {
  if (num < 10) {
    return num
  }
}
console.log(zero('00'), 00)
var addStrings = function(num1, num2) {
  if (num1 < 5100 && num2 < 5100) {
    var sum = num1 + num2
    if (sum < 10) {
      return sum
    }
    return sum
  }
};
console.log(addStrings('02', '0'))

//注意 这是字符串，与number的加减不同
