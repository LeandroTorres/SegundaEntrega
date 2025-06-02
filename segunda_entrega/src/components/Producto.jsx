import { Link } from "react-router-dom"

function Producto({nombre, descripcion, precio, id}) {
  return (
    <Link to={`/productos/${id}`}>
      <h2>{nombre}</h2>
      <h3>{descripcion}</h3>
      <h2>${precio}</h2>
    </Link>
  )
}

export default Producto