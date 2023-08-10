import React from "react";
import DawlanceFreezer from "../../../Backened/Electric Freezer/Dawlance_Freezer";
import { useState, useEffect } from "react";
import Card from "../../UI/Card";

const Dawlance_Freezer = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(DawlanceFreezer)
    }, [])
    return (
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
    )
}
export default Dawlance_Freezer;
