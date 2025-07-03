import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './components/Error';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Descripcion from './components/Descripcion';
import Carrito from './components/Carrito';
import { getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react';

function App() {
  const db = getFirestore();

  const [carrito, setCarrito] = useState([]);

  // ✅ Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  // ✅ Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // ✅ Agregar al carrito con control de cantidad
  const agregarAlCarrito = (producto) => {
    const index = carrito.findIndex((item) => item.id === producto.id);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito[index].cantidad += 1;
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // ✅ Eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((prod) => prod.id !== id));
  };

  // ✅ Vaciar todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout carrito={carrito} />}>
          <Route index element={<Home />} />
          <Route path="/productos" element={<Productos onAddToCart={agregarAlCarrito} />} />
          <Route path="/carrito" element={
            <Carrito
              carrito={carrito}
              eliminarDelCarrito={eliminarDelCarrito}
              vaciarCarrito={vaciarCarrito}
            />
          } />

          <Route path="/productos/:id" element={<Descripcion />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;