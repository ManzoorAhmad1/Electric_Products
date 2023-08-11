import React from "react";
import classes from './Navbar.module.css';
import { Link } from "react-router-dom";
const Navbar = (props) => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.NavbarContent}>
                <h2>M-A Electronics</h2>
                <ul className={classes.NavbarList}>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="about">about</Link></li>
                </ul>
            </div>

            <div className={classes.button}>
                <button onClick={props.onClick}>LoginForm</button>
            </div>
        </div>

    )
}

export default Navbar;