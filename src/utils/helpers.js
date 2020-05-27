export function initiateGrid(rows, columns, cb){
    const boxes = [];
   
    // O(n^c) runtime
    for(let r = 1; r <= rows; r++) {
        for(let c = 1; c <= columns; c++){
            // initiating an array of cell potiions
            boxes.push({
                row: r,
                col: c,
                active: false
            });
        }
    }

    cb(boxes)
}