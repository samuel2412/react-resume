import React, { useState } from 'react';

const Button = props => {
    const [buttonStyle, setButtonStyle] = useState({
        ...props.style,
        border: props.border,
        borderRadius: props.borderRadius,
        height: props.height,
        width: props.width,
        backgroundColor: props.firstColor,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginLeft,
        zIndex: props.zIndex,
        WebkitTransition: '500ms linear',
    })


    const changeButtonStyle = (event) => {
        if (event.type === 'mouseenter') {
            setButtonStyle({

                ...buttonStyle,
                backgroundColor: props.secondColor
            })
        } else {
            setButtonStyle({
                ...buttonStyle,
                backgroundColor: props.firstColor
            })
        }
    }

    return (
        
            <button style={buttonStyle}
                onClick={props.onClick}
                onMouseEnter={(event) => changeButtonStyle(event)}
                onMouseLeave={(event) => changeButtonStyle(event)}
            >
                {props.children}
            </button >
      
    );

}
export default Button;