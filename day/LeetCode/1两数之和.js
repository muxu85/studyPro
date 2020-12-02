// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

var nums = [2, 7, 11, 15]
var target = 9

// var nums = [3, 2, 4]
// var target = 6

// var twoSum = function(nums, target) {
//   for (var i=0;i<nums.length;i++) {
//     for(var j=i+1; j<nums.length;j++) {
//       if(nums[i] + nums[j] === target) {
//         return [i,j]
//       }
//     }
//   }
// };

// var twoSum = function (nums, target) {
//   for (var i = 0; i < nums.length;i++) {
//     if(nums.indexOf(target - nums[i]) > -1) {
//       return [i,nums.indexOf(target - nums[i])]
//     }
//   }
// };

// var twoSum = function (nums, target) {
//   for (let i = 0, len = nums.length; i < len; i++) {
//     if (nums.indexOf(target - nums[i]) > -1) {
//       if (nums[i] === target - nums[i]) {
//         continue
//       }
//       else {
//         return [i, nums.indexOf(target - nums[i])]
//       }
//     }
//   }
// };

var twoSum = function(nums, target) {
  let map = {};//key数字 value下标
  let loop = 0;//循环次数
  let dis;//目标与当前值的差
  while(loop < nums.length){
      dis = target - nums[loop];
      if(map[dis] != undefined){
          return [map[dis], loop];
      }
      map[nums[loop]] = loop;
      loop++;
  }
  return;
};

console.log(twoSum(nums, target))