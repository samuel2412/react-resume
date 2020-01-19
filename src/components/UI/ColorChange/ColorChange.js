import React, { useState } from 'react';




const ColorChange = props => {
    const [style, setStyle] = useState({
        backgroundColor: props.firstBgColor,
        color: props.firstColor,
        WebkitTransition: '500ms linear',
    })


    const changeStyle = (event) => {
        if (event.type === 'mouseenter') {
            setStyle({

                ...style,
                color: props.secondColor,
                backgroundColor: props.secondBgColor
            })
        } else {
            setStyle({
                ...style,
                color: props.firstColor,
                backgroundColor: props.firstBgColor
            })
        }
    }

    return (
        <div style={style}
            onMouseEnter={(event) => changeStyle(event)}
            onMouseLeave={(event) => changeStyle(event)}
        >
            {props.children}
        </div >
    );

}
export default ColorChange;