import React from 'react'
import FormHeading from './FormHeading.js';
import FormBody from './FormBody.js';

export default function Addnewtaskform() {
    return (
        <div className='py-5 d-flex flex-column justify-content-center'>
            <FormHeading formtitle="Add new task"/>
            <FormBody />
        </div>
    );
};
