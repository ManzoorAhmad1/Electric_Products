import React from "react";
import classes from "./ProductsItem.module.css"
import ElectricFan from "../ProductItems/Electric_Fan";
import ElectricCooler from "../ProductItems/Electric_Cooler";
import ElectricHeater from "../ProductItems/Electric_Heater";
import ElectricIron from "../ProductItems/Electric_Iron";
import ElectricFreezer from "../ProductItems/Electric_Freezer";

const ProductsItem = (props) => {
    return (
        <div>
            <h1>Products</h1>
            <ul className={classes.ProductsList}>
                <li><ElectricCooler /></li>
                <li><ElectricFan /></li>
                <li><ElectricFreezer /></li>
                <li><ElectricHeater /></li>
                <li><ElectricIron /></li>

            </ul>
        </div>
    )
}
export default ProductsItem;