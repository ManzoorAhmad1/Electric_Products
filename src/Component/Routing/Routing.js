
import Home from "../Home/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "../Products/Products";
import RootLayout from "../UI/RootLayout";
import GFCCooler from "../ProductsDetail/Cooler/GFC_Cooler"
import RoyleCooler from "../ProductsDetail/Cooler/Royle_Cooler"
import AsiaCooler from "../ProductsDetail/Cooler/Asia_Cooler"
import GFCFan from "../ProductsDetail/Fan/GFC_Fan";
import RoyleFan from "../ProductsDetail/Fan/Royle_Fan"
import LahoreFan from "../ProductsDetail/Fan/Lahore_Fan"
import DawlanceFreezer from "../ProductsDetail/Freezer/Dawlance_Freezer"
import HaierFreezer from "../ProductsDetail/Freezer/Haier_Freezer"
import PelFreezer from "../ProductsDetail/Freezer/Pel_Freezer"

function Routing() {
    const router = createBrowserRouter([
        {
            path: "/", element: <RootLayout />, children: [
                { path: "/", element: <Home /> },
                { path: "products", element: <Products /> },
                { path: 'GFCCooler', element: <GFCCooler /> },
                { path: "/RoyleCooler", element: <RoyleCooler /> },
                { path: "/AsiaCooler", element: <AsiaCooler /> },
                { path: "/GFCFan", element: <GFCFan /> },
                { path: "/RoyleFan", element: <RoyleFan /> },
                { path: "/LahoreFan", element: <LahoreFan /> },
                { path: "/DawlanceFreezer", element: <DawlanceFreezer /> },
                { path: "/HaierFreezer", element: <HaierFreezer /> },
                { path: "/PelFreezer", element: <PelFreezer /> },
            ]
        },
    ])
    return (
        <div >
            <RouterProvider router={router} />
        </div>
    );
}

export default Routing;
