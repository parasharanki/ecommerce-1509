import React from 'react'
import { useNavigate } from "react-router-dom";

function Homepage() {
      const navigate = useNavigate();
  return (
    <div>
     <button onClick={() => navigate("/add-products")}>
        go to addproducts page
     </button>
    </div>
  )
}

export default Homepage
