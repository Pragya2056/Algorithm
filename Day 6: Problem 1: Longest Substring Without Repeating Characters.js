/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let obj = {};
    let i = 0;
    let j = 0;
    let maxlength = 0;
 while(j < s.length){
     if(obj[s[j]]===undefined){
         obj[s[j]]=1;
     }else if(obj[s[j]]>=1){
         while(obj[s[j]]!=undefined){
             if(obj[s[i]]===1){
                 delete obj[s[i]]
                 
             }else{
                 obj[s[i]]--
             }
             i++;
         }
                  obj[s[j]]=1;

     }
     maxlength = Math.max(maxlength , j-i+1);

     j++;
 }
   return (maxlength)
};
