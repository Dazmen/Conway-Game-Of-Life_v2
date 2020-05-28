import React from 'react';
import styled from 'styled-components';

import { generateNextGen } from '../utils/helpers.js';

const ControlBar = (props) => {

    const handleFinalizedGrid = () => {
        props.setNextGen(generateNextGen(props.currGen))
    };

    const handleNextGen = () => {
        const nextGrid = generateNextGen(props.currGen);
        props.setNextGen(nextGrid)
        props.setPrevGen(props.currGen);
        props.setCurrGen(props.nextGen);
        props.setGenCount(() => {
            return props.genCount + 1
        })
    }

    return(
        <div>
            <button onClick={() => {
                handleFinalizedGrid();
            }}>
                Finalize Drawn Grid
            </button>

            <button onClick={() => {
                handleNextGen();
            }}>
                Next
            </button>
            <span>Generations: {props.genCount}</span>
        </div>
    )
};

export default ControlBar;