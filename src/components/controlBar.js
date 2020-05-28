import React from 'react';

const ControlBar = (props) => {
    const { animating, setAnimating } = props;

    return (
        <div onClick={() => {
            setAnimating(!animating)
        }}>
            <button>{animating ? 'Stop' : 'Start'}</button>
        </div>
    )
};

export default ControlBar