import React from 'react';
import styled from 'styled-components';

import { generateEmptyMatrix, generateRandomMatrix, generateNextMatrix } from '../utils/helpers.js';

const ControlBar = (props) => {
    const { animating, setAnimating, setGenCount,
            gridSize, setMatrix } = props;


    return (
        <ToolBar>
                
            <span>Controls:  </span>
            <Button onClick={() => {
                setGenCount(count => count + 1);
                setMatrix(matrix => generateNextMatrix(matrix));
            }}>
                Next
            </Button>
            <Button onClick={() => {
                setAnimating(!animating)
                }}>
                    {animating ? 'Stop' : 'Start'}
            </Button>

            <Button onClick={() => {
                setAnimating(false);
                setMatrix(generateEmptyMatrix(gridSize.rows, gridSize.cols))
                setGenCount(0);
            }}>
                Clear
            </Button>

            <Button onClick={() => {
                setMatrix(generateRandomMatrix(gridSize.rows, gridSize.cols))
                setGenCount(0);
            }}>
                Random Seed
            </Button>
                
        </ToolBar>
    )
};

export default ControlBar;

const ToolBar = styled.div`
    margin: 0 auto;
    width: 100%;
    text-align: center;
`;

const Button = styled.button`
    width: 105px;
    height: 25px;
    margin: 5px;
`;