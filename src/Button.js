import React from 'react';
import './Button.css'

function Button({children, size, color, width, handleClick, disabled}) {
    // className에서 Button이 먼저 적용이 되고 ${size}가 나중에 적용이된다.
    return <button className={`Button ${size} ${color} ${width}`}
    onClick={handleClick} disabled={disabled}
>{children}</button>
}

export default Button;

Button.defaultProps = {
    size: 'medium',
    color: 'tomato',
    disabled: false
}