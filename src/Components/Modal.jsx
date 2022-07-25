/* eslint-disable react/prop-types */
import React from 'react';

const Form = (props) => {
    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                                
                    <div className="modal-body">
                        {props.element}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Form;
