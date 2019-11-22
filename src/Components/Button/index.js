import React from 'react';
import './index.scss';

const Button = (props) => {

    const {
        onClick,
        color,
        size,
    } = props;

    let className = 'btn';

    const sizeObj = {
        small: 'pdng-xs fnt-s',
        medium: 'pdng-s fnt-m',
        large: 'pdng-m fnt-l'
    };

    if (color) {
        className += ` btn-${color}`
    }

    if (size) {
        className += ` ${sizeObj[size]}`;
    } else {
        className += ' pdng-xs fnt-m';
    }

    return (
        <button
            onClick={onClick}
            className={className}
        >
            {props.children}
        </button>
    );
};

export default Button;
