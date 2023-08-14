import React from "react";
import { useState, useEffect } from "react";
import Royle_Cooler from "../../../Backened/Electric Cooler/Royle_Cooler";
import Card from "../../UI/Card";
import ProductsItem from "../../Products/ProductsItem";
import classes from "./Royle_Cooler.module.css"


const RoyleCooler = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(Royle_Cooler)
    }, [])
    return (
        <div className={classes.products}>
            <div className={classes.ProductsItem}>
                <ProductsItem />
            </div>
            <div className={classes.ProductsDetails}>
                <main>
                    {data.map((cooler) => {
                        return (
                            <Card key={cooler.id}>
                                <img src={cooler.UrlImage} alt={cooler.title} />
                                <h1> {cooler.title}</h1>
                                <p className={classes.price}>{cooler.price}</p>
                                <p>{cooler.description}</p>
                            </Card>
                        )
                    })}
                </main>
            </div>
        </div>

    )
}
export default RoyleCooler;
