const addRow = (row) => {
    if(row === 0)
    return[];
    
    const triangle = [];
    for(let i=0; i<row; i++){
        triangle[i] = [];
        for(let j=0; j<=i ;j++){
            if (j === 0) {
                result[j][i] = 1
            } else if (i === 0 || i === j) {
                result[j][i] = 1
            } else {
                result[j][i] = result[j - 1][i - 1] + result[j - 1][i]
          }
        }
      }
      return result;
};
