import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, Shop, Product } from './pages'
import arrow from './asset/ui/arrow-down-sign-to-navigate.png'

function App() {
  const handleScrollToTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div>
      <div className='scroll-to-top' onClick={handleScrollToTop}>
        <img  src={arrow} alt="" />
      </div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/all' element={<Shop category='all'/>}></Route>
        <Route path='/new' element={<Shop category='new'/>}></Route>
        <Route path='/popular' element={<Shop category='popular'/>}></Route>
        <Route path='/sale' element={<Shop category='sale'/>}></Route>
        <Route path='/exclusive' element={<Shop category='exclusive'/>}></Route>
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productId" element={<Product />} />

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
