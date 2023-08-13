import React from "react";
import classes from "./Home.module.css"
import LoginForm from "../LoginForm/LoginForm"
const Home = (props) => {
    return (
        <div className={classes.home}>
            <div className={classes.LoginForm}>
                <h1>WelCome to M-A Electric Online Store</h1>
                <p>M-A Electrics operates as an online electrical supplier, where you can buy all electric products. Whether you need electricals for your residential, commercial or industrial needs, just browse into "pakelectrics.com - The Electrical Wholesaler" and get the most suitable product at affordable price.</p>
                <div className={classes.button}>
                    <button><a href="https://lahorefan.com/" target="_blank" rel="noreferrer">Read More</a></button>
                </div>
            </div>
            <div className={classes.heading}>
                <LoginForm />
            </div>
        </div>

    )
}
export default Home;