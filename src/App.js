import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Products from "./components/Products";

import Slider from "./components/Slider";

import ProductDetails from "./components/ProductDetails";

import ErrorPage from "./components/ErrorPage";

function App() {

  return (

    <>

      <Navbar />

      <Routes>

        <Route path="/" element={ <>
        
          <Slider /> <Products />
          
        </> } />

        <Route path="product/:productId" element={ <ProductDetails /> } />

        <Route path=":error" element={ <ErrorPage /> } />

      </Routes>

    </>

  );

}

export default App;
