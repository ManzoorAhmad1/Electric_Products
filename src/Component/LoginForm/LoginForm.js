import React from "react";
import classes from "./LoginForm.module.css"
import { useState } from "react";
const LoginForm = (props) => {

    const [data, setData] = useState("");
    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(data)
    }
    const onchangeUserHandler = (event) => {
        setData(event.target.value);

    }
    const onchangePasswordHandler = (event) => {
        setData(event.target.value);
    }
    return (
        <div className={classes.form} onSubmit={formSubmitHandler}>
            <form onSubmit={props.onSubmit} className={classes.formsItem} >
                <div>
                    <h1>Login Form</h1>
                </div>
                <div className={classes.loginButton}>
                    <button className={classes.button} >Sign In</button>
                    <button className={classes.button} >Sign Up</button>
                </div>
                <label>UserName</label >
                <input type="text" placeholder="Enter your Name" onChange={onchangeUserHandler} />
                <label>UserPassword</label >
                <input type="password" placeholder="Enter your Password" onChange={onchangePasswordHandler} />
                <button className={classes.button} >Submit</button>
            </form>
        </div>
    )
}
export default LoginForm;