/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = []
    let r = []
    
    for(i = 0; i <= s.length; i++){
        res.push(s[s.length-i])
    }
    
    res = res.join("").split(" ");
    
    for(j = 0; j < res.length; j++){
        r.unshift(res[j]);
    }
    
    return r.join(" ");
};
