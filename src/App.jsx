import React from 'react'
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Layout from './layout/Layout';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='productDetail/:id' element={<ProductDetails />}/>
      </Route>
    </Routes>
  )
};

export default App;