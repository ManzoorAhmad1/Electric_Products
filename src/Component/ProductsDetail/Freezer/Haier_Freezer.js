
import HaierFreezer from "../../../Backened/Electric Freezer/Haier_Freezer";
import { useState, useEffect } from "react";
import Card from "../../UI/Card";

const Haier_Freezer = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(HaierFreezer)
    }, [])
    return (
        <main>
            {data.map((freezer) => {
                return (
                    <Card>
                        <img src={freezer.ImageUrl} alt={freezer.title} />
                        <h1>{freezer.title}</h1>
                        <p>{freezer.description}</p>
                    </Card>
                )
            })}
        </main>
    )
}
export default Haier_Freezer;
