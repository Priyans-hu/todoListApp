import React , { useState } from 'react'

export default function FormAction(props) {
    const [display,setDisplay] = useState("true");    
    
    function deleteButtonHandler(){
        console.log('Delete button handler');
    }
    function editButtonHandler(){
        console.log('Edit button handler');
    }
    return (
        <span >
            <button type="button" title='Edit Task' className="btn btn-primary mx-2" onClick={editButtonHandler}>
                <i className="fa-solid fa-pen"></i>
            </button>
            <button type="button" title='Delete Task' className="btn btn-danger" onClick={deleteButtonHandler}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </span>
    );
};
