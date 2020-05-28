import React, { useState, useRef } from "react";
import styled from 'styled-components';
import produce from 'immer';

import { generateMatrix, generateNextMatrix } from '../utils/helpers.js';
import useInterval from '../utils/hooks/useInterval.js'; // Dan Abermov's useInterval Hook

const GameGrid = (props) => {
    const { gridSize, animating, } = props;
    const [ matrix, setMatrix ] = useState(() => {
        return generateMatrix(gridSize.rows, gridSize.cols)
    })
    

    useInterval(() => {
        setMatrix(matrix => generateNextMatrix(matrix));
        console.log('NEW MATRIX', matrix)
    }, animating ? 500 : null)

    // will need to have a nested loop to loop traverse the matrix for rendering 
    return (
        <GridContainer 
        rows={gridSize.rows} 
        cols={gridSize.cols} >

            {matrix.map((row, r) => {
                return row.map((col, c) => {
                    return <Box 
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

const Box = styled.div.attrs(props => ({
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