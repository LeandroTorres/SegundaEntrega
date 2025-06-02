import React from 'react'
import productos from '../data/productos'
import { useParams } from 'react-router-dom'

function Descripcion() {
    const {id} = useParams()

    const producto = productos.find(prod=>prod.id===parseInt(id))
    if(!producto){
        return <h2>Producto no encontrado</h2>
    }
  return (
    <div>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripción}</p>
        <h3>{producto.precio}</h3>
    </div>
  )
}

export default Descripcion