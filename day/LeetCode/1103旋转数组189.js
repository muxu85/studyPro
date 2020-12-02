/**给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。 */

/**
示例 1:
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]

示例 2:
输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
 */

/**
说明:
尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的 原地 算法。
*/

/**
 * 原地算法：
 * 在计算科学中，一个原地算法基本上不需要借助额外辅助的数据结构，然而允许少量额外的辅助变量来转换数据的算法，当算法运行时，输入的数据通常会被要输出的部分覆盖掉。
 * 在计算复杂性理论中，原地算法包含使用O（1）空间复杂度的所有算法。
 */

 //测试用例

var num = [1, 2, 3, 4, 5, 6, 7]
var k = 3

/**
 * @param {number[]} nums 
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// var rotate = function (nums, k) {
//   var arr = nums.splice(-k)
//   nums.unshift(...arr)
//   return nums
// };
/** 
 * 以上方法有问题，如下数组得到的结果不正确：[1,2]
 */


//  暴力法：
var rotate = function (nums, k) {
  let temp = null
  let pre = null
  for (var i = 0; i < k; i++) {
    pre = nums[nums.length - 1]
    for (var j = 0; j < nums.length; j++) {
      temp = nums[j]
      nums[j] = pre
      pre = temp
    }
  }
  return nums
};
console.log(rotate(num, k), 'ppp')