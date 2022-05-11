/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    if(nums.indexOf(target) == -1){
        nums.push(target);
        nums.sort((a, b) => a - b);
    }
    
    let min = 0, max = nums.length - 1;    
    
    while(min <= max){
        let mid = Math.floor((min + max) / 2);
        
        if(target == nums[mid]){
            return nums.indexOf(target);
        }
        else{
            target < nums[mid] ? max = mid - 1 : min = mid + 1;
        }        
    }
    
};
