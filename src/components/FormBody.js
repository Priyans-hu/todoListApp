import React, { useState } from 'react';

const FormBody = ({ addTask }) => {
    const [taskname, setTaskname] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        addTask(taskname);
        setTaskname('');
    }

    return (
        <form className='py-2' onSubmit={submitHandler}>
            <div className="form-row align-items-center">
                <div className="w-75 col-sm-5 my-1">
                    <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inlineFormInputName" 
                        placeholder='Get milk' 
                        value={taskname} 
                        onChange={(e) => setTaskname(e.target.value)}/>
                </div>
                <div className="col-auto my-1">
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        title='Add Task'>
                            <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormBody;