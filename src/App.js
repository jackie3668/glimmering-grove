import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, Shop, Product, Cart, About, Contact } from './pages';
import arrow from './asset/ui/arrow-down-sign-to-navigate.png';
import ShopContextProvider from './context/ShopContext';
import './App.css'

function App() {
  
  const handleScrollToTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
      <div>
        <div className='scroll-to-top' onClick={handleScrollToTop}>
          <img src={arrow} alt='' />
        </div>
        <BrowserRouter>
          <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/all' element={<Shop category='all' />} />
            <Route path='/new' element={<Shop category='new' />} />
            <Route path='/popular' element={<Shop category='popular' />} />
            <Route path='/sale' element={<Shop category='sale' />} />
            <Route path='/exclusive' element={<Shop category='exclusive' />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          </ShopContextProvider>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
