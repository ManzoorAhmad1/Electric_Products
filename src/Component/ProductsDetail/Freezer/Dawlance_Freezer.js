import React from "react";
import DawlanceFreezer from "../../../Backened/Electric Freezer/Dawlance_Freezer";
import { useState, useEffect } from "react";
import Card from "../../UI/Card";
import ProductsItem from "../../Products/ProductsItem";
import classes from "./Dawlance_Freezer.module.css"


const Dawlance_Freezer = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(DawlanceFreezer)
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
export default Dawlance_Freezer;
