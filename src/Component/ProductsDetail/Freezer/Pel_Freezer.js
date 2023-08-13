
import React from "react";
import PelFreezer from "../../../Backened/Electric Freezer/Pel_Freezer";
import Card from "../../UI/Card";
import { useState, useEffect } from "react";
import ProductsItem from "../../Products/ProductsItem";
import classes from "./Pel_Freezer.module.css"
const Pel_Freezer = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(PelFreezer)
    }, [])
    return (
        <div className={classes.products}>
            <div className={classes.ProductsItem}>
                <ProductsItem />
            </div>
            <div className={classes.ProductsDetails}>
                <main>
                    {data.map((freezer) => {
                        return (
                            <Card key={freezer.id}>
                                <img src={freezer.ImageUrl} alt={freezer.title} />
                                <h1>{freezer.title}</h1>
                                <p>{freezer.description}</p>
                            </Card>
                        )
                    })}
                </main>
            </div>

        </div>

    )
}
export default Pel_Freezer;
