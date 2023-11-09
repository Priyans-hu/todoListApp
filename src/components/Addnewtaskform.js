import React from 'react'
import FormHeading from './FormHeading.js';
import FormBody from './FormBody.js';

export default function Addnewtaskform(props) {
    return (
        <div className='py-5 d-flex flex-column justify-content-center'>
            <FormHeading formtitle="Add new task"/>
            <FormBody input={props.input} setInput={props.setInput} todos={props.todos} setTodos={props.setTodos}/>
        </div>
    );
};
