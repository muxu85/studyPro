// js基本语法

// 1  while
// var i = 0;
// while (i < 100) {
//   console.log(i, 'i')
//   // i += 1
//   // i++
//   // ++i
//  i = i +1
// }
// 以上四种i+1，得到的结果都一样

// 2  for
// var x = 3
// for (var i = 0; i < x; i++) {
//   console.log(i, 'i')
// }

// 改为while
// var i = 0
// while (i < 3) {
//   console.log(i, 'i')
//   i++
// }

// 3 do...while
// 改成 do...while
// var i = 0
// do {
//   console.log(i, 'i')
//   i++
// } while(i<3)

// 4 break和continue
// break 用于跳出代码块循环
// continue 用于终止本轮循环返回循环结构

// var i = 0
// while (i < 100) {
//   console.log(i, 'i')
//   i++
//   if(i===20) break
// }

var i = 0
while (i < 100){
  i++;
  if (i % 2 === 0) continue;
  console.log('i 当前为：' + i);
}

