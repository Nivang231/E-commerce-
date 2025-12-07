import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='bg-black text-4xl text-white p-3 justify-between flex '>
      <div className='flex gap-5 '>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

      </div>
        <div>
          <Link to="/cart">🛒</Link>
        </div>
    </div>
  )
}

export default Header