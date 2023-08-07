import React from "react";
import classes from "./ProductsItem.module.css"
import ElectricFan from "./ProductItems/Electric_Fan";
import ElectricCooler from "./ProductItems/Electric_Cooler";
import ElectricHeater from "./ProductItems/Electric_Heater";
import ElectricIron from "./ProductItems/Electric_Iron";
import ElectricFreezer from "./ProductItems/Electric_Freezer";

const ProductsItem = (props) => {
    return (
        <div>
            <ul className={classes.ProductsList}>
                <li><a href="/"><ElectricCooler />ElectricCooler</a></li>
                <li><a href="/"><ElectricFan />ElectricFan</a></li>
                <li><a href="/"><ElectricFreezer />ElectricFreezer</a></li>
                <li><a href="/"><ElectricHeater />ElectricHeater</a></li>
                <li><a href="/"><ElectricIron />ElectricIron</a></li>
            </ul>
        </div>
    )
}
export default ProductsItem;