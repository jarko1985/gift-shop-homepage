import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productData2 } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose a gift for HER" data={productData} />
      <Products heading="Choose a Gift for HIM" data={productData2} />
      <Feature
        title="Gift of the Day"
        subTitle="Italian Luxurious Wine Bottle"
      />

      <Footer />
    </Router>
  );
}

export default App;
