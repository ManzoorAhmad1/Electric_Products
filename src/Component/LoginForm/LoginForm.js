import React, { useState } from "react";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userNameValidation, setuserNameValidation] = useState(true)
    const [userPasswordValidation, setuserPasswordValidation] = useState(true)
    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (userName.trim() === "") {
            setuserNameValidation(false);
        }
        if (userPassword.trim() === "") {
            setuserPasswordValidation(false)
        }
        if (userName.trim() === "" || userPassword.trim() === "") {
            return;
        }
        setUserName("");
        setUserPassword("");
        console.log(userName, userPassword)
    };

    const onchangeUserHandler = (event) => {
        const value = event.target.value;
        if (value.trim() === 0) {
            return;
        }
        setUserName(value);
        if (value.trim() !== "") {
            setuserNameValidation(true);
        }
    };
    const onchangePasswordHandler = (event) => {
        setUserPassword(event.target.value);
        if (userPassword.trim() !== 0) {
            setuserPasswordValidation(true)
        }
    };

    return (
        <div className={classes.form}>
            <form onSubmit={formSubmitHandler} className={classes.formsItem}>
                <div>
                    <h1>Login Form</h1>
                </div>
                <div className={classes.loginButton}>
                    <button className={classes.button}>Sign In</button>
                    <button className={classes.button}>Sign Up</button>
                </div>
                {userNameValidation ? <label>userName</label> : <h3>Enter a valid userName</h3>}
                <input
                    type="text"
                    placeholder="Enter your Name"
                    value={userName}
                    onChange={onchangeUserHandler}
                />
                {userPasswordValidation ? <label>userPassword</label> : <h3>Enter a valid userPassword</h3>}
                <input
                    type="password"
                    placeholder="Enter your Password"
                    value={userPassword}
                    onChange={onchangePasswordHandler}
                />
                <button className={classes.button}>Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;
