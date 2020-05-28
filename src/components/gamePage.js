import React, { useState } from "react";

import GameGrid from './grid.js';
import ControlBar from './controlBar.js';



const GamePage = () => {
    const [ gridSize, setGridSize ] = useState({
        rows: 50,
        cols: 50
    });

    const [ animating, setAnimating ] = useState(false)

    return (
        <div>
            <GameGrid 
                gridSize={gridSize} 
                animating={animating}
                />
            <ControlBar animating={animating} setAnimating={setAnimating} />
        </div>
    )
};

export default GamePage;