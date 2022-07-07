import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";


import { BrowserRouter as Router, Routes, Route, Link,usePerams } from "react-router-dom";

import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetatil from "./components/ProdductDetail/ProductDetail";



function App() {
  return (
    <div>
      <Header></Header>
      <Router>  
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route exact path="/" element={<Shop/>} />
          <Route exact path="/product/:productKey" element={<ProductDetatil/>} />
          
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
