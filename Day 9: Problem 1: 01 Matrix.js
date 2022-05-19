/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const memo = mat.map(row => new Array(row.length).fill(Infinity));
    
    // Fill in distances for 0s
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                memo[i][j] = 0;
            }
        }
    }
    
    const getMinDistance = (i, j) => 1 + Math.min(
        memo[i + 1]?.[j] ?? Infinity,
        memo[i - 1]?.[j] ?? Infinity,
        memo[i][j + 1] ?? Infinity,
        memo[i][j - 1] ?? Infinity,
    );
    
    // Fill in distances starting from top left
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] !== 0) {
                memo[i][j] = getMinDistance(i, j);
            }
        }
    }
                
    // Fill in distances starting from bottom right
    for (let i = mat.length - 1; i >= 0; i--) {
        for (let j = mat[0].length - 1; j >= 0; j--) {
            if (mat[i][j] !== 0) {
                memo[i][j] = getMinDistance(i, j);
            }
        }
    }

    return memo;
};
