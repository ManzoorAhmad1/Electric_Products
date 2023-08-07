import React from "react";
import classes from './Navbar.module.css';
const Navbar = (props) => {
    return (
        <div className={classes.NavbarMain}>
            <div className={classes.NavbarContent}>
                <h2>M-A Electronics</h2>
                <ul className={classes.NavbarList}>
                    <li><a href="/">home</a></li>
                    <li><a href="about">about</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar;