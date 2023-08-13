import React from "react";
import { Link } from "react-router-dom";
const ElectricFreezer = (props) => {
    return (
        <div>
            <ul className="select">
                <details>
                    <summary>
                        <h3>Electric Freezer</h3>
                    </summary>
                    <li><Link to="/DawlanceFreezer">Dawlance_Freezer</Link></li>
                    <li><Link to="/HaierFreezer">Haier_Freezer</Link></li>
                    <li><Link to="/PelFreezer">Pel_Freezer</Link></li>
                </details>
            </ul>
        </div>
    )
}
export default ElectricFreezer;