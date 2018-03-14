import React from 'react';


const numberInput = (props) => {

    return (
        <div>
            <p>Input your number </p>
            <input type="text" onChange={props.textChanged}/>
        </div>
    )
};

export default numberInput;