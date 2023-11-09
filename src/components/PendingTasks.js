import React, { useState } from 'react';
import PendingTaskListItem from './PendingTaskListItem.js';

export default function PendingTasks(params) {
    const [todos, setTodos] = useState([
        { id: 1, taskname: 'Learn React', completed: false },
        { id: 2, taskname: 'Go to gym', completed: false },
        { id: 3, taskname: 'Get milk and oranges', completed: false },
    ]);

    const handleDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    };

    return (
        <div className=''>
            <ul className="list-group">
                {todos.map(todo => (
                    <PendingTaskListItem key={todo.id} taskname={todo.taskname} id={todo.id} onDelete={handleDelete} />
                ))}
            </ul>
        </div>
    );
};
