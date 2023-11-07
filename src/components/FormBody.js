import React from 'react'

export default function FormBody() {
    return (
        <form className='py-2'>
            <div className="form-row align-items-center">
                <div className="w-75 col-sm-5 my-1">
                    <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                    <input type="text" className="form-control" id="inlineFormInputName" placeholder='Get milk' />
                </div>
                <div className="col-auto my-1">
                    <button type="submit" className="btn btn-primary" title='Add Task'><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </form>
    );
};
