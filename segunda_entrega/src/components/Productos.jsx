
import productos from '../data/productos';
import Producto from './Producto';

function Productos() {
  return (
    <div>
      {productos.map(prod=>(
        <Producto key={prod.id} {...prod}/>
      ))}
    </div>
  )
}

export default Productos