import React from "react";
import ProductsItem from "./ProductsItem";
import classes from "./Products.module.css"
const Products = (props) => {
    return (
        <div className={classes.products}>
            <div className={classes.ProductsItem}>
                <ProductsItem />
            </div>
            <div className={classes.ProductsDetails}>

            </div>

        </div>

    )
}
export default Products;