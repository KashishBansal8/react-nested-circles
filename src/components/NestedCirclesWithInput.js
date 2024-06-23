import React, { useState, useEffect } from 'react'
import NestedCircle from './NestedCircle';
import "./NestedCircle.css";

const NestedCirclesWithInput = () => {
    const [circleVal, setCircleVal] = useState(0);
    const [isBtnClicked, setIsBtnClicked] = useState(false);

    useEffect(() => {
        setIsBtnClicked(true);
    }, [circleVal]);

    return (
        <div className='nested-circles-with-input-comp'>
            <h1>Generate Nested Circles</h1>
            <input type="text" autoFocus value={circleVal} onChange={(e) => setCircleVal(e.target.value)} />
            {
                isBtnClicked && circleVal != 0 ?
                    <div className='nested-circle-comp' style={{ height: `${circleVal * 100}px`, width: `${circleVal * 100}px` }}>
                        {
                            [...new Array(+circleVal)].map((_, index) => {
                                console.log(index, circleVal)
                                return <NestedCircle key={index} width={index + 1} height={index + 1} />
                            })
                        }
                    </div>
                    : ""
            }
        </div>
    )
}

export default NestedCirclesWithInput
