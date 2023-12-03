import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Home, Shop } from './pages'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/all' element={<Shop category='all'/>}></Route>
        <Route path='/new' element={<Shop category='new'/>}></Route>
        <Route path='/popular' element={<Shop category='popular'/>}></Route>
        <Route path='/sale' element={<Shop category='sale'/>}></Route>
        <Route path='/exclusive' element={<Shop category='exclusive'/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
