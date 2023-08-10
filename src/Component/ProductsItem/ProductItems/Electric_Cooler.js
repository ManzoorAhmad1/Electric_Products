import React from "react";
import { Link } from "react-router-dom";
const ElectricCooler = (props) => {

    return (

        <ul className="select">
            <details>
                <summary>
                    <h3>Electric Cooler</h3>
                </summary>
                <li><Link to="/GFCCooler">GFC_Cooler</Link></li>
                <li><Link to="/RoyleCooler">Royle_Cooler</Link></li>
                <li><Link to="/AsiaCooler">Asia_Cooler</Link></li>
            </details>
        </ul>

    )
}
export default ElectricCooler;