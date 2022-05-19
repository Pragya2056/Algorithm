/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let ilen = s.length - 1;
    for (let i = 0, j = ilen; i < j; i++, j--) {
        let tmp = s[i];
        s[i] = s[j];
        s[j] = tmp;
    }
    return s;
};
