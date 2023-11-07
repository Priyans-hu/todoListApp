import React from 'react'

function NavbarTitle(props) {
    return (
        <a className="navbar-brand text-center m-auto font-weight-bold text-primary" href="/">
            <h1>{props.title}</h1>
        </a>
    );
}

export default NavbarTitle;