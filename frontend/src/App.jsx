import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import './App.css'

import defaultProducts from './data/defaultProducts.json';
import defaultCategories from './data/defaultCategories.json';
import defaultSuppliers from './data/defaultSuppliers.json';

function App() {
    useEffect(() => {
    const isFirstTime = !localStorage.getItem('hasData');
    
    if (isFirstTime) {
      localStorage.setItem('products', JSON.stringify(defaultProducts));
      localStorage.setItem('categories', JSON.stringify(defaultCategories));
      localStorage.setItem('suppliers', JSON.stringify(defaultSuppliers));
      localStorage.setItem('hasData', 'true');
      
      console.log('Default data loaded!');
    }
  }, []);
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
