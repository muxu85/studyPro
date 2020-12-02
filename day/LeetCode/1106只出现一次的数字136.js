//** 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。 */

/** 
  说明：
  你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
*/

/** 
  示例 1:
  输入: [2,2,1]
  输出: 1

  示例 2:
  输入: [4,1,2,1,2]
  输出: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//   nums = nums.sort()
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
//       return nums[i]
//     }
//   }
// };
// singleNumber([4, 1, 2, 1, 2])

// 一开始想到的是先排序，再进行比较，如果与上一个及下一个元素不同，那么就是要找的唯一元素
// 但是，题目中标明：算法应该具有线性时间复杂度，即线性阶O(n),而排序基本上都是O(n),不符合
// 看题解，应用异或算法

var singleNumber = function (nums) {
  let num = nums[0]
  for (var i = 1; i < nums.length; i++) {
      num =  num ^ nums[i]
  }
 return num
};
singleNumber([4, 1, 2, 1, 2])

//



