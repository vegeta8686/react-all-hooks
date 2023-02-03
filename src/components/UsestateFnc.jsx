// use state hook with counter example 

import { useState } from "react";

export default function Usestate() {
    const [counter, setCounter] = useState(() => 0);
    const [theme, setTheme] = useState(() => 'blue');
    const [state, setState] = useState(() => ({ score: 0, hit: 'yes' }))
    // this will call use state every time whenever out function calls , if u want try below example
    // const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(previousCount => previousCount + 1);
        setTheme('red');
        setState(previousState => ({ score: previousState.score + counter }))
    };
    const decrement = () => {
        setCounter(preValue => preValue - 1);
        setTheme('blue');
    }
    return (
        <div className="container p-3">
            <button className="btn btn-primary" onClick={increment}>Increment</button> <br />
            <span>{counter} {theme}</span><br />
            <span>{state.score} {state.hit}</span>
            <button className="btn btn-secondary" onClick={decrement}>Decrement</button>
        </div>
    );
}


// try this example to see how many times use state is running
// function initial() {
//     console.log('run');
//     return 4;
// }
// const [state, setState] = useState(initial())