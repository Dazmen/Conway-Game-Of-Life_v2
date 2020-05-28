import React, { useState } from "react";

import GameGrid from './grid.js';
import ControlBar from './controlBar.js';

import { generateEmptyMatrix } from '../utils/helpers.js';

const GamePage = () => {
    const [ gridSize, setGridSize ] = useState({
        rows: 50,
        cols: 50
    });
    const [ matrix, setMatrix ] = useState(() => {
        return generateEmptyMatrix(gridSize.rows, gridSize.cols)
    });
    const [ animating, setAnimating ] = useState(false);
    const [ genCount, setGenCount ] = useState(0);
    const [ refreshRate, setRefreshRate ] = useState(100);

    

    return (
        <div>
            <GameGrid 
                gridSize={gridSize} 
                animating={animating}
                matrix={matrix}
                setMatrix={setMatrix}
                setGenCount={setGenCount}
                genCount={genCount}
                refreshRate={refreshRate}
                />
            <ControlBar 
                animating={animating} 
                setAnimating={setAnimating}
                setGenCount={setGenCount}
                genCount={genCount} 
                gridSize={gridSize}
                setGridSize={setGridSize}
                setMatrix={setMatrix}
                />
        </div>
    )
};

export default GamePage;