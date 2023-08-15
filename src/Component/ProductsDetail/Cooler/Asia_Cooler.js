import React, { useEffect, useState } from "react";
import Asia_Cooler from "../../../Backened/Electric Cooler/Asia_Cooler";
import Card from "../../UI/Card";
import ProductsItem from "../../Products/ProductsItem";
import classes from "./Asia_Cooler.module.css";

const AsiaCooler = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(Asia_Cooler)
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
                            <Card className={classes.card} key={cooler.id}>
                                <img src={cooler.UrlImage} alt={cooler.title} />
                                <h1> {cooler.title}</h1>
                                <p className={classes.price}>{cooler.price}</p>
                                <p>{cooler.description}</p>
                                <div className={classes.button}>
                                    <button>AddChart</button>
                                </div>
                            </Card>
                        )
                    })}
                </main>
            </div>

        </div>

    )
}
export default AsiaCooler;
