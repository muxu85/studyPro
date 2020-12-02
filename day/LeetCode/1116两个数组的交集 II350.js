/* 
  给定两个数组，编写一个函数来计算它们的交集。
*/

/* 
示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]

示例 2:
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
*/

/* 
说明：
输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。

进阶：
如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 */

 /* 
 思路：
 判断数组长度，
循环两个数组，优先循环长度小的数组
找到相同的值，放到arr[]中
返回arr[]
 */

// 排序 + indexOf + splice
var intersect = function(nums1, nums2) {
  let arr = []
         for (var i=0; i<nums1.length;i++) {
           let index = nums2.indexOf(nums1[i])
           if(index>-1) {
             arr.push(nums1[i])
             nums2.splice(index,1)
           }
         }
         return arr
 };

//  Map

var intersect = function(nums1, nums2) {
  let arr = []
  let arr = []
  let map = {}
  // for (var i =0; i<nums1.length; i++) {
    for (var i of nums1) {
      console.log(map[i], 'te')
    // map 存储nums1中每个元素出现的次数
    if(!map[i]){
      map[i] = 1
    } else {
      map[i]++
    }
  }
  // 执行完上方的for of + map后，map存储的是  {1: 2, 2: 2}   {4: 1, 5: 1, 9:1}
  // for of 与 for 循环有区别
  for(var j of nums2) {
    console.log(j, 'j')
    var t = map[j]
    console.log(t, 't')
    if(t>0){
      arr.push(j)
      map[j]--
    }
  }
  return arr
};


// 双指针
var intersect = function(nums1, nums2) {
  nums1.sort((a,b) => a-b)
  nums2.sort((a,b) => a-b)
  let arr = []
  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) { // nums1的值小于nums2的值，移动nums1
      i++
    } else if (nums1[i] > nums2[j]) { // nums1的值大于nums2的值，移动nums1
      j++
    } else if (nums1[i] == nums2[j]) { // nums1的值等于nums2的值，移动nums1，nums2
      arr.push(nums1[i])
      i++;
      j++
    }
  }
  return arr
 };