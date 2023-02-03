import React from 'react';
import { ACTIONS } from './CreateTodo';

export const List = ({ todo, dispatch, setName }) => {
    const updateTodo = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.updateTodo, payload: { todo: todo } });
        setName(todo.name);
    };
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
                {todo.name}
            </span>
            <button className='btn btn-primary' onClick={() =>
                dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })}>toggle</button>
            <button className='btn btn-primary' onClick={updateTodo}>update</button>
            <button className='btn btn-info' onClick={() =>
                dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>delete</button>
        </div>
    );
}
