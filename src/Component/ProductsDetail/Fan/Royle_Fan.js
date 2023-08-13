import React from "react";
import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import RoyleFan from "../../../Backened/Electric Fan/Royle_Fan";
import ProductsItem from "../../Products/ProductsItem";
import classes from "./Royle_Fan.module.css"


const Royle_Fan = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(RoyleFan)
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
export default Royle_Fan;
