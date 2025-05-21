import React, { useEffect } from 'react';
import { BrowserRouter, Routes , Route  } from 'react-router-dom'
import Header from './components/Header'
import Product1 from './components/Product1'
import Pages from './pages/Pages'

function App() {


  useEffect(() => {
    document.documentElement.classList.add('./js');
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pages />} />
        {/* <Route path='/' element={<Product1 />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App