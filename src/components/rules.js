import React from 'react';
import styled from 'styled-components';

import RuleBar from './gridRules.js';

const Rules = (props) => {

    return(
        <Container>
            <RuleContainer>
                <H3>The Game's Rules</H3>
                <p> 1.) If a cell has more than three neighbors, it dies. (overpopulation)</p>
                <p> 2.) If a cell has less than two neighbors it also dies. (underpopulation)</p>
                <p> 3.) If a dead cell has exactly 3 live cell neighbors, it becomes a live cell as well. (reproduction)</p>
                <p> 4.) If a cell has exactly two or three live neighbors, it survives.</p>
                <RuleBar {...props}/>
            </RuleContainer>
        </Container>
    )
};

export default Rules;

const H3 = styled.h3`
    text-align: center;
`;

const Container = styled.div`
    width: 45%;
    display:flex;
    align-items: flex-start;

`;

const RuleContainer = styled.div`
    width: 70%;
    margin-left: 10%;
    
`;