import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
const RootLayout = (props) => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default RootLayout;