// 运算符
// 算术运算符

// 常见运算符
// 加法运算符： `x + y`
// 减法运算符：`x - y`
// 乘法运算符：`x * y`
// 除法运算符：`x / y`
// 指数运算符：`x ** y`
// 取余运算符：`x % y`
// 自增运算符：`x++` 或者 `++x`
// 自减运算符：`x--`或者 `--x`
// 数值运算符：`+x`
// 负数值运算符：`-x`

// 加法运算符

// console.log(1 + 1, '数值 + 数值')  // 2
// console.log(1 + true, '数值 + 布尔') // 2
// console.log('a' + 'b', '字符串 + 字符串') // ab
// console.log(1 + 'b', '数值 + 字符串') // 1b
// console.log(true + 'b', '布尔 + 字符串') // trueb

// console.log('3' + 4 + 5, '字符串+fei') // 345
// console.log(3 + 4 + '5')  // 75

// 加法运算符，是在执行时决定的，决定到底是相加还是相连。
// 也就是说，运算子的不同，导致不同的语法行为，这种现象就是重载
// 如上：字符串位置不同，导致的运算结果不同
// 除了加法运算符，其他运算符都不会发生重载，其他运算符都是转为数值进行运算，如下；

console.log(1 + '2') // 相连
console.log(1 - '2')  // -1 ，字符串转为数值进行运算
console.log(1 * '2')  // 2,字符串转为数值进行运算
console.log(1 / '2')  // 0.5,字符串转为数值进行运算
console.log(1 % '2')  // 1,字符串转为数值进行运算

console.log(1 - 'aa') // NaN
console.log(1 * 'test')  // NaN
console.log(1 - 'a') // NaN

// 为什么是NaN？
// 通常计算失败时，作为Math的某个方法的返回值出现的，或者尝试将字符串解析成数字但失败了的情况下，返回的是NaN（Not A Number）
// 在这里，先是字符串解析成数字失败了，返回NaN，再进行运算时，自然返回NaN
