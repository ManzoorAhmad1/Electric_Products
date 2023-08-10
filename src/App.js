import './App.css';
import Navbar from './Component/Navbar/Navbar';
import GFCCooler from "./Component/ProductsDetail/Cooler/GFC_Cooler"
import RoyleCooler from "./Component/ProductsDetail/Cooler/Royle_Cooler"
import AsiaCooler from "./Component/ProductsDetail/Cooler/Asia_Cooler"
import classes from "./Component/ProductsItem/ProductsItem&Detail/ProductsItem.module.css"
import ProductsItem from "./Component/ProductsItem/ProductsItem&Detail/ProductsItem"
import GFCFan from "./Component/ProductsDetail/Fan/GFC_Fan";
import RoyleFan from "./Component/ProductsDetail/Fan/Royle_Fan"
import LahoreFan from "./Component/ProductsDetail/Fan/Lahore_Fan"
import DawlanceFreezer from "./Component/ProductsDetail/Freezer/Dawlance_Freezer"
import HaierFreezer from "./Component/ProductsDetail/Freezer/Haier_Freezer"
import PelFreezer from "./Component/ProductsDetail/Freezer/Pel_Freezer"
import Home from "./Component/Home/Home"
import About from "./Component/About/About"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <div className={classes.products}>
          <div className={classes.ProductsItem}>
            <ProductsItem />
          </div>
          <div className={classes.ProductsDetails}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/GFCCooler" element={<GFCCooler />} />
              <Route path="/RoyleCooler" element={<RoyleCooler />} />
              <Route path="/AsiaCooler" element={<AsiaCooler />} />
              <Route path="/GFCFan" element={<GFCFan />} />
              <Route path="/RoyleFan" element={<RoyleFan />} />
              <Route path="/LahoreFan" element={<LahoreFan />} />
              <Route path="/DawlanceFreezer" element={<DawlanceFreezer />} />
              <Route path="/HaierFreezer" element={<HaierFreezer />} />
              <Route path="/PelFreezer" element={<PelFreezer />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
