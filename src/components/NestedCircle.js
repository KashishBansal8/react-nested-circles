import React from 'react';
import "./NestedCircle.css";

const NestedCircle = ({ width, height }) => {
    return (
        <div className='nested-circle' style={{
            width: `${width * 100}px`, height: `${height * 100}px`
        }}>

        </div>
    )
}

export default NestedCircle
