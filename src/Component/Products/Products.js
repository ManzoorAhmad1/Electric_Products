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
               <h1>Electric Products Cooler & Fan & Freezer</h1>
               <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, omnis minima. Omnis, illum adipisci similique deleniti obcaecati voluptatum hic doloremque aliquam id quaerat! Itaque aperiam, similique qui repellendus eum natus dolorem obcaecati, est optio perferendis iste asperiores? Eum non tenetur molestiae quae nemo quaerat fugiat alias voluptates cumque vero molestias, consequuntur, ratione, earum commodi nobis aperiam voluptatem eligendi nulla voluptatibus dolores iste aspernatur! A deserunt quia adipisci explicabo autem incidunt dolore dolor! Nulla eum qui, asperiores minima aliquid porro ad delectus id sit ex rerum alias placeat vitae. </h4>
               <div className={classes.button}>
                <button><a href="https://www.gfcfans.com/products/ceiling-fans/13" target="_blank" rel="noreferrer">Read More</a></button>
               </div>
            </div>

        </div>

    )
}
export default Products;