import React from "react";
import { useEffect, useState } from "react";
import LahoreFan from "../../../Backened/Electric Fan/Lahore_Fan";
import Card from "../../UI/Card";
const Lahore_Fan = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(LahoreFan)
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
export default Lahore_Fan;
