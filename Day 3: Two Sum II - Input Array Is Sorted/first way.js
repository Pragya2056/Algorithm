/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const hash = {};
    
    for(let i = 0; i < numbers.length; i++) {
        const answer = target - numbers[i]; 
        
        if(hash[answer] !== undefined) {  
			return [hash[answer] + 1, i+1];
		}
        else hash[numbers[i]] = i; 
    }
};
