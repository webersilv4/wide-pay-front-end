/* eslint-disable react/prop-types */
import React from 'react';

const Form = (props) => {
    return (
        <input 
            type={props.type} 
            name={props.name} 
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    );
};

export default Form;
