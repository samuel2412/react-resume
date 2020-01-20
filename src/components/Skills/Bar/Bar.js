import React, { useState } from 'react';

const Bar = props => {
    const [style, setStyle] = useState({
        marginBottom: '20px',
        height: props.height, 
        width: props.progress,
        backgroundColor: props.frontColor,
        borderRadius: '3px',
        WebkitTransition: '300ms linear',
    })

    const changeStyle = (event) => {
        if (event.type === 'mouseenter') {
            setStyle({
                ...style,
                backgroundColor: props.thirdColor
            })
        } else {
            setStyle({
                ...style,
                backgroundColor: props.frontColor
            })
        }
    }

    return (
        <div style={{ height: props.height, width: '100%', backgroundColor: props.backColor,borderRadius: '3px' }}>
            <div
                style={style}
                onMouseEnter={(event) => changeStyle(event)}
                onMouseLeave={(event) => changeStyle(event)}
            >
                {props.children}
            </div>
        </div>
    );
}
export default Bar;