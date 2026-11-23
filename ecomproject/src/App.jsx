import { useState } from 'react'
import  { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import AddProducts from './pages/admin/AddProducts';
import Homepage from './pages/admin/Homepage';

function App() {
  const Homepage= lazy(() => import("./pages/admin/Homepage"));
const AddProducts= lazy(() => import("./pages/admin/AddProducts"));

  return (
    <>
<Suspense>
  <Routes>
<Route path="/" element={<Homepage />} />
 <Route path="/add-products" element={<AddProducts />} />
  </Routes>
</Suspense>


    </>
  )
}

export default App
