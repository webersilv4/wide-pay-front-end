/* eslint-disable react/prop-types */
import React from 'react';

const Alert = (props) => {

    const alert = document.getElementById('alert');

    if (alert)
        setTimeout(()=>{ alert.remove(); }, 3000);

    return (
        <div id="alert" className={`alert ${props.typeAlert} text-center`}>
            {props.message}
        </div> 
    );
};

export default Alert;
