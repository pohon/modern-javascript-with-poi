import React from 'react';

export default (props) => (
    <div>
        <h2>Poi React</h2>
        <p>Hari ini : {props.now}</p>
        <p>Besok : {props.tomorrow}</p>
    </div>
)