/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const arr = [...nums];  // create a new array with an element of array nums

    for(let i = 0; i < nums.length; i++) {
        const rotatedIndex = (i + k) % nums.length;  //Calculate the index after rotation of each element
        nums[rotatedIndex] = arr[i]; 
    }
};
