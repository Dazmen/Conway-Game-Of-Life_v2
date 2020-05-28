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
};

export function generateNextGen(currentGen){
    const currentCopy = currentGen.map(cell => {
        return { ...cell }
    });
    
    const nextGrid = currentCopy.map(cell => {
        let liveNeighbors = 0;

        currentGen.forEach(pn => {
            // pn stands for potential neighbor
            if( isNeighborHelper(pn, cell) ){
                if(pn.active){
                    liveNeighbors += 1
                } 
            }
        });

        if(cell.active){
            if(liveNeighbors < 2){
                cell.active = false;
            } else if (liveNeighbors > 3){
                cell.active = false;
            };
        }
        if (!cell.active) {
            if(liveNeighbors === 3){
                cell.active = true;
            };
        };
        return cell
    });
    console.log('INSIDE HELPER FUNC', currentGen)
    return nextGrid
};

function isNeighborHelper(pn, t){
    // pn = potential neighbor. t = target cell
    if(pn.row === t.row - 1){
        // check for potential top neighbor
        if(pn.col === t.col - 1 ||
            pn.col === t.col ||
            pn.col === t.col + 1){
            return true
        } else {
            return false
        }
    } else if (pn.row === t.row){
        // mid check
        if(pn.col === t.col - 1 ||
            pn.col === t.col + 1){
            return true
        } else {
            return false
        }
    } else if (pn.row === t.row +1){
        // bot check
        if(pn.col === t.col - 1 ||
            pn.col === t.col ||
            pn.col === t.col + 1){
            return true
        } else {
            return false
        }
    } else {
        return false
    };
}