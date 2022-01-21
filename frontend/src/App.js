import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main>
          <Home />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default App;
