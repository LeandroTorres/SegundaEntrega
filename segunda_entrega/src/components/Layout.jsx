import { Link, Outlet } from "react-router-dom"
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/productos"}>Productos</Link>
          </li>
          <li>
            <Link to={"/nosotros"}>Nosotros</Link>
          </li>
          <Link to={"/carrito"}>Ver carrito</Link>
        </ul>
      </nav>

      <Link to="/carrito" className="carrito-fijo">
        <FaShoppingCart size={28} />
      </Link>
      
      <Outlet />      
    </>
  )
}

export default Layout