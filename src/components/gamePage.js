import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Grid from './grid.js';
import { initiateGrid } from '../utils/helpers.js';

const GamePage = () => {
    // console.log('page render')
    const [ nextGen, setNextGen ] = useState([]);
    const [ currGen, setCurrGen ] = useState([]);
    const [ prevGen, setPrevGen ] = useState([]);
    const [ genCount, setGenCount] = useState(0);
    const [ gridSize, setGridSize ] = useState({
        rows: 50,
        columns: 50
    });

    // console.log(currGen)

    useEffect(() => {
        initiateGrid(gridSize.rows, gridSize.columns, setCurrGen)
    }, [gridSize])

    return (
        <div>
            <Grid 
                rows={gridSize.rows}
                columns={gridSize.columns}
                currGen={currGen}
                setCurrGen={setCurrGen}/>

        </div>
    )
};

export default GamePage;