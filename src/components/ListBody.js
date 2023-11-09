import './styles/ListBody.css';
import React from 'react'
import Addnewtaskform from './Addnewtaskform.js';
import PendingTasks from './PendingTasks.js';

export default function ListBody({ todos, setTodos, handleDelete, handleStatus, addTask, editTask}) {
    return(
        <div className='ListBodyContainer container mx-auto'>
            <Addnewtaskform addTask={addTask}/>
            <PendingTasks 
                todos={todos} 
                setTodos={setTodos}
                editTask={editTask} 
                handleDelete={handleDelete} 
                handleStatus={handleStatus}
            />
        </div>
    );
};
