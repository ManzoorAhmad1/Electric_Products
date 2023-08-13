import React from "react";
import { useEffect, useState } from "react";
import LahoreFan from "../../../Backened/Electric Fan/Lahore_Fan";
import Card from "../../UI/Card";
import ProductsItem from "../../Products/ProductsItem";
import classes from "./Lahore_Fan.module.css"
const Lahore_Fan = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(LahoreFan)
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
                                <img src={fan.imageUrl} alt={fan.title} />
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
export default Lahore_Fan;
