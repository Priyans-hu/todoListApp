import './styles/ListBody.css';
import React from 'react'
import Addnewtaskform from './Addnewtaskform.js';
import PendingTasks from './PendingTasks.js';
import { useState } from 'react';

export default function ListBody() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    return(
        <div className='ListBodyContainer container mx-auto'>
            <Addnewtaskform input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
            <PendingTasks />
        </div>
    );
};
