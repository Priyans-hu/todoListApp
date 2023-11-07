import './styles/ListBody.css';
import React from 'react'
import Addnewtaskform from './Addnewtaskform.js';
import PendingTasks from './PendingTasks.js';

export default function ListBody() {
    return(
        <div className='ListBodyContainer container mx-auto'>
            <Addnewtaskform />
            <PendingTasks />
        </div>
    );
};
