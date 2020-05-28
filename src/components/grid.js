import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// import Cell from './cell.js';

const Grid = (props) => {
    // console.log('grid render')

    const handleActiveToggle = (cellIndex) => {
        const newGrid = props.currGen.map((cell, i) => {
            if(i === cellIndex){
                cell.active = !cell.active;
                return cell
            } else {
                return cell
            }
        })
        // console.log('NEW', newGrid)
        props.setCurrGen(newGrid)
    }

    return (
        <GridContainer rows={props.rows} columns={props.columns}>
            {props.currGen.map((cell, i) => {
                return <Box 
                    key={i}
                    style={{backgroundColor: cell.active && "black"}}
                    index={i}
                    onClick={() => {
                        handleActiveToggle(i)
                    }}
                    />
                
            })}
        </GridContainer>
    )
};

export default Grid;

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
const Box = styled.div`
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    border: 1px solid black;
    &:hover {
        background-color: blue;
    }
`;
