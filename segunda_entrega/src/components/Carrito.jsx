import './carrito.css';
import { Link } from 'react-router-dom';

function Carrito({ carrito, eliminarDelCarrito, vaciarCarrito }) {
  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <div className="carrito-container">
      <h2>🛒 Carrito</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {carrito.map((item) => (
              <li key={item.id} className="carrito-item">
                <img src={item.imagen} alt={item.nombre} width={50} />
                <span>{item.nombre}</span>
                <span>Precio: ${item.precio}</span>
                <span>Cantidad: {item.cantidad}</span>
                <button onClick={() => eliminarDelCarrito(item.id)}>❌</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total}</p>
          <button onClick={vaciarCarrito}>🗑 Vaciar carrito</button>
        </>
      )}

      <Link to="/productos">
        <button>⬅ Seguir comprando</button>
      </Link>
    </div>
  );
}

export default Carrito;