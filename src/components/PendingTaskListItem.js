import React from 'react';
import CheckBox from './CheckBox.js';
import FormActions from './FormAction.js';

export default function PendingTaskListItem(props) {
    return (
        <li className={`list-group-item bg-secondary col-lg-5 text-left justify-content-between align-items-center my-2 rounded d-flex`}>
            <div>
                <CheckBox />
                <p className='m-0 pl-4 d-inline'>{props.taskname}</p>
            </div>
            <FormActions deleteButtonHandler={() => props.onDelete(props.id)} />
        </li>
    );
}