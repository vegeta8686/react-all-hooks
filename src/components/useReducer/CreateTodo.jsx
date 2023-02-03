import React, { useReducer, useState } from 'react';
import { List } from './List';

export const ACTIONS = {
    ADD_TODO: 'add',
    UPDATE_TODO: 'update',
    DELETE_TODO: 'delete',
    TOGGLE: 'toggle'
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOGGLE:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case ACTIONS.UPDATE_TODO:
            // return todos.filter(todo => todo.id !== action.payload.todo.id);
            return todos;
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id);
        default:
            return todos;
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false };
}

export const CreateTodo = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');
    const addToDo = (e) => {
        e.preventDefault();
        dispatch({ type: 'add', payload: { name: name } });
        setName('');
    };
    return (
        <>
            <form onSubmit={addToDo} className="p-3">
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} className="bg-blue-400" />
            </form>
            {todos.length !== 0 && todos.map(todo => {
                return <List key={todo.id} todo={todo} dispatch={dispatch} setName={setName} />
            })}
        </>
    );
}
