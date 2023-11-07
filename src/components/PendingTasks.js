import React from 'react'
import PendingTaskListItem from './PendingTaskListItem.js';

export default function PendingTasks(params) {
    return (
        <div className=''>
            <ul className="list-group">
                <PendingTaskListItem taskname="Learn react"/>
                <PendingTaskListItem taskname="Go to gym"/>
                <PendingTaskListItem taskname="Get milk and oranges"/>
            </ul>
        </div>
    );
};
