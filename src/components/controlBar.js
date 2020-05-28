import React from 'react';
import styled from 'styled-components';

import { generateEmptyMatrix, generateRandomMatrix } from '../utils/helpers.js';

const ControlBar = (props) => {
    const { animating, setAnimating, setGenCount, genCount,
            gridSize, setGridSize, setMatrix } = props;

    return (
        <ToolBar>
            <div>
                <h3>Generations: {genCount} </h3>
            </div>

            <div>
                <button onClick={() => {
                    setAnimating(!animating)
                    }}>
                        {animating ? 'Stop' : 'Start'}
                </button>

                <button onClick={() => {
                    setAnimating(false);
                    setMatrix(generateEmptyMatrix(gridSize.rows, gridSize.cols))
                    setGenCount(0);
                }}>
                    Clear
                </button>

                <button onClick={() => {
                    setMatrix(generateRandomMatrix(gridSize.rows, gridSize.cols))
                    setGenCount(0);
                }}>
                    Random Seed
                </button>
            </div>
        </ToolBar>
    )
};

export default ControlBar;

const ToolBar = styled.div`
    margin: 0 auto;
    width: 500px;
    text-align: center;
`;