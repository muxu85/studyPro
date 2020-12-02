/** 
  给定一个整数数组，判断是否存在重复元素。
  如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 */

/** 
  示例 1:
  输入: [1,2,3,1]
  输出: true

  示例 2:
  输入: [1,2,3,4]
  输出: false

  示例 3:
  输入: [1,1,1,3,3,4,3,2,4,2]
  输出: true
  */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var num = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// var containsDuplicate = function (nums) {
//   var flag = false
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = i + 1; j < nums.length; j++) {
//       if (nums[i] !== nums[j]) {
//         flag = false
//       } else {
//         flag = true
//       }
//     }
//     if (flag) {
//       return true
//     } else {
//       return false
//     }
//   }
// };
// console.log(containsDuplicate(num))

// 以上解法错误，当数组为空数组时，返回的结果为undefined

// 法一：先排序再比较是否相同
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums = nums.sort()
  for (var i = 0; i < nums.length - 1; ++i) {
    if (nums[i] == nums[i + 1]) {
      return true
    }
  }
  return false
};

// 法二：使用Set的size方法
var containsDuplicate = function (nums) {
  if (new Set(nums).size === nums.length) {
    return true
  } else {
    return false
  }
};

// 法三：使用some+哈希
// 注：js对象有天然的哈希特性


