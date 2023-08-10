import React from "react";

import DawlanceFreezer from "../../../ProductsDetail/Freezer/Dawlance_Freezer";
import HaierFreezer from "../../../ProductsDetail/Freezer/Haier_Freezer";
import PelFreezer from "../../../ProductsDetail/Freezer/Pel_Freezer";

const ProductsItemDetail = (props) => {
    return (
        <div>
            <DawlanceFreezer />
            <HaierFreezer />
            <PelFreezer />
        </div>
    )
}
export default ProductsItemDetail;