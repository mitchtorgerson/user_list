import React from 'react';
import './style.css';

const Button = props => {
    const {
        action,
        label,
    } = props;

    return (
        <button
            className={'button'}
            onClick={action}>
            {label}
        </button>
    );
};

export default Button;
