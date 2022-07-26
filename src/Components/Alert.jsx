/* eslint-disable react/prop-types */
import React from 'react';

const Alert = (props) => {

    return (
        <>
            <div id='alert' className={`alert ${props.typeAlert} container text-center`} role="alert">
                {props.message}
            </div>
        
        </>
    );
};

export default Alert;
