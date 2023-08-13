
import HaierFreezer from "../../../Backened/Electric Freezer/Haier_Freezer";
import { useState, useEffect } from "react";
import Card from "../../UI/Card";
import ProductsItem from "../../Products/ProductsItem";
import classes from "./Haier_Freezer.module.css";

const Haier_Freezer = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(HaierFreezer)
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
export default Haier_Freezer;
