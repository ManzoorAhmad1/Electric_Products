import React from "react";
import { useState } from "react";
import GFCCooler from "../ProductsDetail/Cooler/GFC_Cooler"
import RoyleCooler from "../ProductsDetail/Cooler/Royle_Cooler"
import AsiaCooler from "../ProductsDetail/Cooler/Asia_Cooler"
import classes from "../ProductsItem/ProductsItem&Detail/ProductsItem.module.css"
import ProductsItem from "../ProductsItem/ProductsItem&Detail/ProductsItem"
import GFCFan from "../ProductsDetail/Fan/GFC_Fan";
import RoyleFan from "../ProductsDetail/Fan/Royle_Fan"
import LahoreFan from "../ProductsDetail/Fan/Lahore_Fan"
import DawlanceFreezer from "../ProductsDetail/Freezer/Dawlance_Freezer"
import HaierFreezer from "../ProductsDetail/Freezer/Haier_Freezer"
import Navbar from '../Navbar/Navbar';
import PelFreezer from "../ProductsDetail/Freezer/Pel_Freezer"
import Home from "../Home/Home"
import About from "../About/About"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginForm from "../LoginForm/LoginForm";
const Routing = (props) => {
    const [loginFrom, setLoginForm] = useState(false);
    const onClickHandler = () => {
        setLoginForm(true)
    }

    return (
        <div>
            {loginFrom ? <LoginForm loginForm={setLoginForm} /> :
                <BrowserRouter>
                    <Navbar onClick={onClickHandler} />
                    <div className={classes.products}>
                        <div className={classes.ProductsItem}>
                            <ProductsItem />
                        </div>
                        <div className={classes.ProductsDetails}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/GFCCooler" element={<GFCCooler />} />
                                <Route path="/RoyleCooler" element={<RoyleCooler />} />
                                <Route path="/AsiaCooler" element={<AsiaCooler />} />
                                <Route path="/GFCFan" element={<GFCFan />} />
                                <Route path="/RoyleFan" element={<RoyleFan />} />
                                <Route path="/LahoreFan" element={<LahoreFan />} />
                                <Route path="/DawlanceFreezer" element={<DawlanceFreezer />} />
                                <Route path="/HaierFreezer" element={<HaierFreezer />} />
                                <Route path="/PelFreezer" element={<PelFreezer />} />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>}
        </div>

    )
}
export default Routing;