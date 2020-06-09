import React from 'react';
import './style.css';

const TextField = props => {
    const {
        value,
        name,
        placeholder,
        onChange,
    } = props;

    return (
        <input
            className={'text-field'}
            {...{ value, name, placeholder, onChange  }}
        />
    );
};

export default TextField;
