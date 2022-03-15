import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import CategoriesBar from './components/CategoriesBar';

import Home from './components/Home'
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <CategoriesBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
