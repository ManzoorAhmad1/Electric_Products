import React from "react";
import { useEffect, useState } from "react";
import GFCCooler from "../../../Backened/Electric Cooler/GFC_Cooler";
import Card from "../../UI/Card";
import ProductsItem from "../../Products/ProductsItem";
import classes from "./GFC_Cooler.module.css";
const GFC_Cooler = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(GFCCooler)
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
                                <img src={cooler.imageUrl} alt={cooler.title} />
                                <h1> {cooler.title}</h1>
                                <p>{cooler.description}</p>
                            </Card>
                        )
                    })}
                </main>        </div>

        </div>

    )
}
export default GFC_Cooler;
