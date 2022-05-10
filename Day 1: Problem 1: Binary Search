/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    first = 0;
    last = nums.length - 1;
    while ( first <= last ) {
        const mid = Math.floor(((first+last)/2))
    if (nums[mid] < target){
    first = mid + 1;
    }
    else if (nums[mid] > target){
    last = mid - 1;
    }
    else{
        return mid;
    }
}
    return -1;
};
