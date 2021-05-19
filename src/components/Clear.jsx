import React from 'react';
import './Clear.css';

export const Clear = props => (
    <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
)