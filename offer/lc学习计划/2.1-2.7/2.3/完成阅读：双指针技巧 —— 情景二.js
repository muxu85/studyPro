// 双指针技巧——情景一
// 来自： 《数组和字符串》

// 有时，我们需要使用两个不同步的指针解决问题，即快慢指针。
// 与情景一不同的是，两个指针的运动方向算是相同的，而不是相反的。

// 从一个经典问题开始：
// 给定一个数组nums和一个值val，需要原地移除所有数值等于val的元素，并返回移除后数组的新长度。

// 双指针——快慢指针的思想:
// 初始化一个快指针fast和一个慢指针slow
// fast每次都移动一步
// slow只有当fast指向的值不等于val时才移动一步
// 最后返回的是slow

// 实现：
// const nums = [0, 1, 2, 2, 3, 0, 4, 2]
const nums = [3,2,2,3]
const val = 3

var removeElement = function(nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--;
    }
  }
  return nums.length
};
  
console.log(removeElement(nums, val));


// 注：
// 为什么要i--?
// splice() 会修改原来数组，所以当去除相等的值后，nums的长度相当于减去1，此时指针应后移一位
