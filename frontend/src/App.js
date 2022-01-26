import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/cart/' element={<Cart />} />
            <Route path='/cart/:id' element={<Cart />} />
            {/* <Home /> */}
          </Routes>
        </main>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
