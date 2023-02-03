import React, { useState, useRef } from 'react'

export const Useref = () => {
    const [name, setName] = useState('');
    const inputRef = useRef();
    
    const changeColor = () => {
        inputRef.current.style.color = 'red';
        inputRef.current.style.border = 'solid 2px blue';
    };
    return (
        <div className='p-2'>
            <input type="text" ref={inputRef} value={name}
                className="border-solid border-2 border-black-400"
                onChange={(e) => setName(e.target.value)} /> <br />
            <span>My Name is {name}</span>
            <div>
                <button onClick={changeColor} className="btn btn-danger">change color</button>
            </div>
        </div>
    )
}
