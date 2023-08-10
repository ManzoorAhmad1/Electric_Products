import React from "react";
import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import RoyleFan from "../../../Backened/Electric Fan/Royle_Fan";
const Royle_Fan = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(RoyleFan)
    }, [])
    return (
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
    )
}
export default Royle_Fan;
