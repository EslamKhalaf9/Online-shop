import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Register from './pages/Register';
import Shipping from './pages/Shipping';
import UserDetails from './pages/UserDetails';
import Payment from './pages/Payment';

const App = () => {
  return (
    <Router>
      <div className='bg-slate-200'>
        <Header />
        <main className='min-h-80'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/cart/' element={<Cart />} />
            <Route path='/cart/:id' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<UserDetails />} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/payment' element={<Payment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
