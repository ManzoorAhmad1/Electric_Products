import React from "react";
import { Link } from "react-router-dom";
const ElectricFan = (props) => {
    return (
        <div>
            <ul className="select">
                <details>
                    <summary>
                        <h3>Electric Fan</h3>
                    </summary>
                    <li><Link to="/GFCFan">GFC_Fan</Link></li>
                    <li><Link to="/RoyleFan">Royle_Fan</Link></li>
                    <li><Link to="/LahoreFan">Lahore_Fan</Link></li>
                </details>
            </ul>
        </div>
    )
}
export default ElectricFan;