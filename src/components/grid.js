import React from "react";
import styled from 'styled-components';
import produce from 'immer';

import ControlBar from './controlBar.js';

const GameGrid = (props) => {
    const { gridSize, matrix, setMatrix, 
            animating, cellColor, genCount,
            setAnimating, setGenCount } = props;
    
    return (
        <div style={{textAlign: "center"}}>
            <p>Generations: {genCount} </p>
            <GridContainer 
            rows={gridSize.rows} 
            cols={gridSize.cols} >

                {matrix.map((row, r) => {
                    return row.map((col, c) => {
                        return <Cell 
                                key={`row: ${r}, col: ${c}`}
                                style={{backgroundColor: matrix[r][c] ? cellColor : null}}
                                onClick={() => {
                                    if(!animating){
                                        const start = performance.now();
                                        setMatrix(produce(matrixCopy => {
                                            matrixCopy[r][c] = !matrixCopy[r][c];
                                        }))
                                        const end = performance.now();
                                        // console.log('runtime(ms) onClick', end - start);
                                    }
                                }}
                            />
                    })
                })}
            </GridContainer>
            <ControlBar 
                setAnimating={setAnimating}
                animating={animating}
                setGenCount={setGenCount}
                gridSize={gridSize}
                setMatrix={setMatrix}
                />
        </div>
    )
};

export default GameGrid;

const Cell = styled.div.attrs(props => ({
    boxSize: props.boxSize
}))`
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    border: 1px solid black;
    &:hover {
        background-color: blue;
    }
`;

const GridContainer = styled.div.attrs(props => ({
    rows: props.rows * 12,
    columns: props.columns * 12
    }))`
    width: ${props => props.rows}px;
    height: ${props => props.columns}px;
    margin: 10px auto;
    background-color: #FAFBFC;
    display: flex;
    flex-wrap: wrap;
`;