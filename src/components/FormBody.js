import React from 'react';

const FormBody = ({ input, setInput, todos, setTodos }) => {
    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log(input);        
        setInput("");
        setTodos([...todos, { title: input, completed: false }]);
    }

    return (
        <form className='py-2' onSubmit={formSubmissionHandler}>
            <div className="form-row align-items-center">
                <div className="w-75 col-sm-5 my-1">
                    <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                    <input type="text" className="form-control" id="inlineFormInputName" placeholder='Get milk' onChange={inputChangeHandler} value={input} />
                </div>
                <div className="col-auto my-1">
                    <button type="submit" className="btn btn-primary" title='Add Task'><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </form>
    );
};

export default FormBody;