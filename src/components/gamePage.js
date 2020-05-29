import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import GameGrid from './grid.js';
import ControlBar from './controlBar.js';
import Rules from './rules.js';

import { generateEmptyMatrix, generateNextMatrix } from '../utils/helpers.js';


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
    const [ refreshRate, setRefreshRate ] = useState(200);
    const [ cellColor, setCellColor ] = useState('black')

   useEffect(() => {
       let interval = null;
       if(animating){
            interval = setInterval(() => {
                // const start = performance.now();
                setGenCount(count => count + 1);
                setMatrix(matrix => generateNextMatrix(matrix));
                // const end = performance.now();
                // console.log('runtime(ms)', end - start);
            }, refreshRate)    
       } else if (!animating && genCount !==0){
            clearInterval(interval)
       }
       return () => clearInterval(interval)
   }, [animating])



    return (
        <div>
            <H1>John Conway's Game of Life</H1>
                <GridRuleContainer>
                    <GameGrid 
                        gridSize={gridSize} 
                        animating={animating}
                        matrix={matrix}
                        setMatrix={setMatrix}
                        cellColor={cellColor}
                        genCount={genCount} 
                        setAnimating={setAnimating}
                        setGenCount={setGenCount}
                        />

                    <Rules 
                        setAnimating={setAnimating}
                        setGenCount={setGenCount}
                        setGridSize={setGridSize}
                        setMatrix={setMatrix}
                        setCellColor={setCellColor}
                        setRefreshRate={setRefreshRate}
                    />
                </GridRuleContainer>
        </div>
    )
};

export default GamePage;

const H1 = styled.h1`
    text-align: center;
`;

const GridRuleContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

