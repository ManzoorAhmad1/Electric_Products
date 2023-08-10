import React, { useEffect, useState } from "react";
import GFCFan from "../../../Backened/Electric Fan/GFC_Fan";
import Card from "../../UI/Card";

const GFC_Fan = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(GFCFan)
    }, [])
    return (
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
    )
}
export default GFC_Fan;
