import React from 'react';
import styled from 'styled-components';


import { generateEmptyMatrix } from '../utils/helpers.js';

const RuleBar = (props) => {
    const {  setAnimating, setGenCount,
             setGridSize, setMatrix, setCellColor } = props;

    const colors = ["Crimson", "ForestGreen", "DarkOrange", "DarkViolet", "black"]

    const gridResize = (rows, cols) => {
        setGridSize({
            rows: rows,
            cols: cols
        })
        setMatrix(generateEmptyMatrix(rows, cols))
        setGenCount(0);
        setAnimating(false)
    };

    return (
        <GridRules>
            <div>
                <h3>Cell Color:</h3> 
                <div>
                    {colors.map(color => {
                        return <Button 
                        style={{backgroundColor: color, color: "white"}}
                        onClick={() => {
                            setCellColor(color)
                        }}>
                            {color}
                        </Button>
                    })}
                </div>
            </div>
            <div>
                <h3>Grid Size:</h3>
                <div>
                    <Button onClick={() => {
                        gridResize(25, 25);
                    }}>
                        Small(25x25)
                    </Button>

                    <Button onClick={() => {
                        gridResize(50, 50);
                    }}>
                        Default(50x50)
                    </Button>

                    <Button onClick={() => {
                        gridResize(60, 60);
                    }}>
                        large(60x60)
                    </Button>
                </div>
            </div>
        </GridRules>
    )
};

export default RuleBar;

const GridRules = styled.div`
    padding: 20px 0;
    margin: 0 auto;
    width: 100%;
    text-align: center;
`;

const Button = styled.button`
    width: 105px;
    height: 25px;
    margin: 5px;
`;