import React from 'react';
import CheckBox from './CheckBox.js';
import FormActions from './FormAction.js';

export default function PendingTaskListItem({ id, taskname, onDelete, status, handleStatus, editTask }) {
    return (
        <li className={`list-group-item col-lg-5 my-2 rounded
            text-left justify-content-between align-items-center d-flex
            transition-0_2s-ease-in-out
            ${status ? "bg-success text-white" : "bg-secondary"}`}
        >
            <div className='d-flex align-items-top justify-content-between'>
                <CheckBox id={id} status={status} handleStatus={handleStatus}/>
                <p className='m-0 pl-4 d-inline'>{taskname}</p>
            </div>
            <FormActions 
                deleteButtonHandler={() => onDelete(id)} 
                editTask={() => editTask(id, 'Editing task')} 
            />
        </li>
    );
}