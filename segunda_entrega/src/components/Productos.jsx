import './productos.css';
import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Producto from './Producto';



function Productos({ onAddToCart }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsRef = collection(db, 'items');

    getDocs(itemsRef)
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("⚠️ No se encontraron productos.");
          return;
        }

        const productosFirebase = snapshot.docs.map((doc) => ({
          id: doc.id,
          nombre: doc.data().title,
          descripcion: doc.data().description,
          precio: doc.data().price,
          imagen: tIMG(doc.data().imageId),
          categoria: doc.data().category,
        }));

        console.log("✅ Productos cargados desde Firebase:", productosFirebase);
        setProductos(productosFirebase);
      })
      .catch((error) => {
        console.error("❌ Error al obtener productos:", error);
      });
  }, []);

  function transformarImagenDrive(url) {
    const match = url.match(/\/d\/(.+?)\//);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return url; // Si no es link válido, lo deja igual
  }

  return (
    <div className="productos-container">
      {productos.map((prod) => (
        <Producto key={prod.id} {...prod} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default Productos;