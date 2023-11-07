import React from 'react'
import NavbarTitle from './NavbarTitle.js';

function Navbar(){
    return (
    <div className="container py-4">
        <nav className="navbar navbar-expand-lg navbar-light rounded">
            <NavbarTitle title="TodoList"/>
        </nav>
    </div>
    );
}

export default Navbar;