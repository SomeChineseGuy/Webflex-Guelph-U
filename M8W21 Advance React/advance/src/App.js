import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';
import ProductInfo from './components/ProductInfo';
import StyledComponents from './components/StyledComponents';
import Context from './components/Context';
import { useState } from 'react';
import CounterContext from './components/context/CounterContext';
import NameContext from './components/NameContext';

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Something Cool yes...");
  const contextObj = {
    counter, 
    setCounter,
    username:"Alvin"
  }
  const nameContextObj = {
    name,
    setName
  }
  return (
    <NameContext.Provider value={nameContextObj}>
      <CounterContext.Provider value={contextObj} >
        <div className="App">
          <BrowserRouter>
            <Link to="/about" >About</Link>
            <Link to="/products" >Product</Link>
            <Routes>
              <Route path='*' element={<h1>Page not found!</h1>} />
              <Route path='/about' element={<About />} />
              <Route path='/products' element ={<Products />} />
              <Route path='/products/:id' element ={<Product />} />
              <Route path='/products/info' element ={<ProductInfo />} />
              <Route path='/style' element ={<StyledComponents />} />
              <Route path='/context' element ={<Context />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CounterContext.Provider>
    </NameContext.Provider>
  );
}

export default App;

// App.get('/products/info')
// App.get('/products/:id')
