import React from "react";
import styled from 'styled-components';
import produce from 'immer';

import { generateNextMatrix } from '../utils/helpers.js';
import useInterval from '../utils/hooks/useInterval.js'; // Dan Abermov's useInterval Hook

const GameGrid = (props) => {
    const { gridSize, animating, matrix, setMatrix, setGenCount, genCount, refreshRate } = props;
    

    useInterval(() => {
        setMatrix(matrix => generateNextMatrix(matrix));
        const start = performance.now();
        setGenCount(produce(count => count += 1))
        const end = performance.now();
        console.log('runtime(ms)', end - start);
        
    }, animating ? refreshRate : null)

    // will need to have a nested loop to loop traverse the matrix for rendering 
    return (
        <GridContainer 
        rows={gridSize.rows} 
        cols={gridSize.cols} >

            {matrix.map((row, r) => {
                return row.map((col, c) => {
                    return <Cell 
                            key={`row: ${r}, col: ${c}`}
                            style={{backgroundColor: matrix[r][c] ? "black" : null}}
                            onClick={() => {
                                setMatrix(produce(matrixCopy => {
                                    matrixCopy[r][c] = !matrixCopy[r][c];
                                }))
                            }}
                        />
                })
            })}
        </GridContainer>
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
    margin: 30px auto;
    background-color: #FAFBFC;
    display: flex;
    flex-wrap: wrap;
`;