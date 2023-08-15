import { useNavigate } from "react-router-dom";
import classes from "./ProductChart.module.css"
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../Redux/Products";
const ProductsChart = (props) => {
    const navigate = useNavigate()
    const counter = useSelector(item => item.counter.value)
    const dispatch = useDispatch()
    const orderHandler = () => {
        navigate("..")
    }
    const addChartItemHandler = () => {
        dispatch(counterAction.increment())
    }
    const removeChartItemHandler = () => {
        dispatch(counterAction.decrement())

    }
    const backToPageHandler=()=>{
        props.setShowCart(false)
    }
    return (
        <div className={classes.chart}>
            <div className={classes.price}>
                <div>
                    <h1>Electric Items</h1>
                </div>
                {/* <div>
                    <h1>$Price/</h1>
                </div> */}
            </div>
            <div>
                <p>X{counter}</p>
            </div>
            <div className={classes.addItem}>
                {/* <div>
                    <h1>ProductItems Name</h1>
                </div> */}
                <div className={classes.button}>
                    <button onClick={addChartItemHandler}>+</button>
                    <button onClick={removeChartItemHandler}>-</button>
                    <button onClick={orderHandler} >Order</button>
                    <button onClick={backToPageHandler} >Back</button>
                </div>
            </div>
        </div>
    )
}
export default ProductsChart;