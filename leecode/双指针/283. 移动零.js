/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
  这道题是移动零,将所有零移动到数组末尾,并保持非零元素的相对顺序。
  解题思路:
  1. 使用双指针方法
  2. left指针指向当前应该填入非零元素的位置
  3. right指针用于遍历数组
  4. 将所有非零元素移到数组前面,保持相对顺序  
  5. 将剩余位置填充为0
*/
var moveZeroes = function (nums) {
  // 使用双指针方法
  // left指针指向当前应该填入非零元素的位置
  // right指针用于遍历数组
  let left = 0;

  // 第一步：将所有非零元素移到数组前面，保持相对顺序
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      // 将非零元素移到left位置，然后left指针前进
      nums[left] = nums[right];
      left++;
    }
  }

  // 第二步：将剩余位置填充为0
  for (let i = left; i < nums.length; i++) {
    nums[i] = 0;
  }
};
