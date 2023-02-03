import React, { useReducer } from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    const increment = () => {
        dispatch({ type: ACTIONS.INCREMENT });
    }
    const decrement = () => {
        dispatch({ type: ACTIONS.DECREMENT });
    }
    return (
        <>
            <button className='btn btn-primary' onClick={increment}>+</button>
            <span>{state.count}</span>
            <button className='btn btn-primary' onClick={decrement}>-</button>
        </>
    );
}
