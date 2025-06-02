
import './App.css'
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import Layout from './components/Layout'
import Error from './components/Error'
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import Productos from './components/Productos'
import Descripcion from './components/Descripcion'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/productos/:id" element={<Descripcion/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
