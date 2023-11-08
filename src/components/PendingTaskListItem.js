import React, { useState } from 'react';
import CheckBox from './CheckBox.js';
import FormActions from './FormAction.js';
import ReactDOM from "react-dom/client";

export default function PendingTaskListItem(props) {
    const [show, setShow] = useState(true);
    function deleteButtonHandler(){
        console.log("deleteButtonHandler");
        setShow(!show);
    }

    return (
        <li className="list-group-item bg-secondary col-lg-5 text-left d-flex justify-content-between align-items-center my-2 rounded" style={{display:show?"flex":"none"}}>
            <div>
                <CheckBox />
                <p className=' m-0 pl-4 d-inline'>{props.taskname}</p>
            </div>
            <FormActions deleteButtonHandler={deleteButtonHandler}/>
        </li>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PendingTaskListItem />)