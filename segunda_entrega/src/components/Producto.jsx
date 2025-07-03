import { Link } from "react-router-dom";

function Producto({ id, nombre, descripcion, precio, imagen, categoria, onAddToCart }) {
  const handleAgregar = () => {
    const producto = {
      id,
      nombre,
      precio,
      imagen,
    };
    onAddToCart(producto);
  };

  return (
    <div className="card">
      <img src={imagen || "https://via.placeholder.com/250"} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p><strong>Precio:</strong> ${precio}</p>
      <p className="categoria">{categoria}</p>

      <div className="botones-producto">
        <button onClick={handleAgregar}>🛒 Agregar al carrito</button>
        <Link to={`/productos/${id}`}>
          <button>Ver más</button>
        </Link>
      </div>
    </div>
  );
}

export default Producto;