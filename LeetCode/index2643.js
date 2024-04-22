/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {

    let index = 0;
    let countOfOne = 0;

    for (let i=0; i < mat.length; i++) {
       let countOfOneInRow = 0;
        
        for (let j=0; j < mat[i].length; j++) {
            const val = mat [i] [j];
            if (val === 1) {
                countOfOneInRow++;
            }
        }
        if (countOfOneInRow>countOfOne) {
            index = i;
            countOfOne = countOfOneInRow;
        }
    }
    return [index, countOfOne];
    
};

console.log(rowAndMaximumOnes([[0,0,0],[0,1,1]]));