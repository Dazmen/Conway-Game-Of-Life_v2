import produce from 'immer';

export function generateMatrix(numRows, numCols){
    const rows = []; // this will become the matrix
    const cols = [];

    // pushing 0's into the col's array
    for(let i=0; i < numCols; i++){
        cols.push(0);
    };
    // pushing the col's array of 0's into each row
    for(let i=0; i < numRows; i++){
        rows.push(cols)
    }
    /* 
        (5,5) should result in
        [
            [0, 0, 0, 0, 0]
            [0, 0, 0, 0, 0]
            [0, 0, 0, 0, 0]
            [0, 0, 0, 0, 0]
            [0, 0, 0, 0, 0]
        ]
    */
    return rows
};

export function generateNextMatrix(matrix) {
    // get the count of the rows and columns
    const rows = matrix.length;
    const cols = matrix[0].length;

    // array of 'indicie' directions, direction[0] representing row an [1] representing column
    const directions = [
        [-1, -1], // NW: 
        [-1, 0], //  N:
        [-1, 1], // NE
        [0, -1], // W
        [0, 1], // E
        [1, -1], // SW
        [1, 0], // S
        [1, 1] // SE
    ];


    const newMatrix = produce(matrix, matrixCopy => {
        console.log('arg', matrix)
        for(let r = 0; r < rows; r++){

            for(let c = 0; c < cols; c++){
                let activeNeighbors = 0;

                directions.forEach(d => {
                    const row = d[0]
                    const col = d[1]
                    // need to check if the cells checked are in bounds of the matrix or it will error out
                    if( r + row >= 0 && 
                        r + row < rows &&
                        c + col >= 0 &&
                        c + col < cols) {
                        // need to use the original matrix, the copy would change as we iterate and the algo would not be accurate
                        if(matrix[r + row][c + col]){
                            activeNeighbors += 1
                        };
                    };
                });
                
                if(activeNeighbors < 2 || activeNeighbors > 3){
                    matrixCopy[r][c] = 0;
                } else if (activeNeighbors === 3){
                    matrixCopy[r][c] = 1;
                };
            };
        };
    });
    console.log('new',newMatrix)
    return newMatrix
};