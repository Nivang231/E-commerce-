import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='bg-black text-4xl text-white flex gap-5 p-3'>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}

export default Header