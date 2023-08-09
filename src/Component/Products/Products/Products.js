import React from 'react';
import ProductsItem from '../ProductsItem/ProductsItem';
import classes from "./Products.module.css"
import ProductsItemDetail from '../ProductsItem/ProductsItemDetail';
const Products = (props) => {
    return (
        <div className={classes.products}>
            <div className={classes.ProductsItem}>
                <ProductsItem />
            </div>
            <div className={classes.ProductsDetails}>
                <ProductsItemDetail />
            </div>
        </div>
    )
}
export default Products;