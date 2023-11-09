import './styles/ListBody.css';
import React from 'react'
import Addnewtaskform from './Addnewtaskform.js';
import PendingTasks from './PendingTasks.js';

export default function ListBody({ todos, setTodos, handleDelete, handleStatus, addTask}) {
    return(
        <div className='ListBodyContainer container mx-auto'>
            <Addnewtaskform addTask={addTask}/>
            <PendingTasks 
                todos={todos} 
                setTodos={setTodos} 
                handleDelete={handleDelete} 
                handleStatus={handleStatus
            }/>
        </div>
    );
};
