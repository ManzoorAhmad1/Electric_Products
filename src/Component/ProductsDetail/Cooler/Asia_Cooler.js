import React, { useEffect, useState } from "react";
import Asia_Cooler from "../../../Backened/Electric Cooler/Asia_Cooler";
import Card from "../../UI/Card";
const AsiaCooler = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(Asia_Cooler)
    }, [])
    return (
        <main>
            {data.map((cooler) => {
                return (
                    <Card key={cooler.id}>
                        <img src={cooler.UrlImage} alt={cooler.title} />
                        <h1> {cooler.title}</h1>
                        <p>{cooler.description}</p>
                    </Card>
                )
            })}
        </main>
    )
}
export default AsiaCooler;
