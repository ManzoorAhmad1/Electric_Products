import React from "react";
import { useEffect, useState } from "react";
import GFCCooler from "../../../Backened/Electric Cooler/GFC_Cooler";
import Card from "../../UI/Card";
import ProductsItem from "../../Products/ProductsItem";
import classes from "./GFC_Cooler.module.css";
import { useDispatch } from "react-redux";
import { counterAction } from "../../Redux/Products";
import ProductsChart from "../../ProductChart/ProductChart";


const GFC_Cooler = (props) => {
    const [showCart, setShowCart] = useState(false)
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(GFCCooler)
    }, [])
    const addProductItemHandler = () => {
        dispatch(counterAction.increment())
        setShowCart(true)
    }
    return (
        <div>
            {showCart ? <ProductsChart setShowCart={setShowCart} /> : <div className={classes.products}>
                <div className={classes.ProductsItem}>
                    <ProductsItem />
                </div>
                <div className={classes.ProductsDetails}>
                    <main>
                        {data.map((cooler) => {
                            return (
                                <Card key={cooler.id}>
                                    <img src={cooler.UrlImage} alt={cooler.title} />
                                    <h1 className={classes.title} > {cooler.title}</h1>
                                    <p className={classes.price}>{cooler.price}</p>
                                    <p>{cooler.description}</p>
                                    <div className={classes.button}>
                                        <button onClick={addProductItemHandler}>AddChart</button>
                                    </div>
                                </Card>
                            )
                        })}
                    </main>        </div>

            </div>
            }

        </div>

    )
}
export default GFC_Cooler;
