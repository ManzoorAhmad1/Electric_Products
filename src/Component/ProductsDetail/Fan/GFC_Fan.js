import React, { useEffect, useState } from "react";
import GFCFan from "../../../Backened/Electric Fan/GFC_Fan";
import Card from "../../UI/Card";
import ProductsItem from "../../Products/ProductsItem";
import classes from "./GFC_Fan.module.css"
const GFC_Fan = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(GFCFan)
    }, [])
    return (
        <div className={classes.products}>
            <div className={classes.ProductsItem}>
                <ProductsItem />
            </div>
            <div className={classes.ProductsDetails}>
                <main>
                    {data.map((fan) => {
                        return (
                            <Card key={fan.id}>
                                <img src={fan.ImageUrl} alt={fan.title} />
                                <h1>{fan.title}</h1>
                                <p>{fan.description}</p>
                            </Card>
                        )
                    })}
                </main>
            </div>

        </div>

    )
}
export default GFC_Fan;
