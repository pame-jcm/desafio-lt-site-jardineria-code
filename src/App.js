
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarPrin from './components/NavbarPrin';
import FooterPrin from './components/FooterPrin'
import MyContext from './MyContext';
import CarritoCompras from './views/CarritoCompras';
import Home from './views/Home';
import Login from './views/Login';
import Registrate from './views/Registrate';
import Tienda from './views/Tienda';
import Perfil from './views/Perfil';
import Articulos from './views/Articulos';
import DetalleProducto from './views/DetalleProducto';
import DetalleArticulo from './views/DetalleArticulo';
import PrivateRoute from './components/PrivateRoute';
import MisCompras from './views/MisCompras';

function App() {

  const [usuario, setUsuario] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [listProducto, setListProducto] = useState([]);
  const [listArticulos, setListArticulos] = useState([]);
  const [totalCompra, setTotalCompra] = useState(0);

  const endPoint = '/plantas.json';
  const endPointAr = '/plantas-info-blog.json';

  useEffect(() => {
    const getProducto = async () => {
        try {
            const res = await fetch(endPoint);
            const data = await res.json();

            const resAr = await fetch(endPointAr);
            const dataAr = await resAr.json();

            setListProducto(data);
            setListArticulos(dataAr);
        } catch (error) {
            console.log(error);
        }
    };
    getProducto();
  }, []);

  return (
    <MyContext.Provider value={{usuario, carrito, listProducto, totalCompra, listArticulos, setUsuario, setListArticulos, setCarrito, setListProducto, setTotalCompra}}>

        <BrowserRouter>
            <NavbarPrin />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path='/desafio-lt-site-jardineria' element={<Home />} />
                <Route path="/registrate" element={<Registrate />} />
                <Route path="/login" element={<Login />} />

                <Route path="/tienda" element={
                  <PrivateRoute>
                    <Tienda favorito='todo'/>
                  </PrivateRoute>
                } />

                <Route path="/tienda/favoritos" element={
                  <PrivateRoute>
                    <Tienda favorito='fav'/>
                  </PrivateRoute>
                } />

                <Route path="/articulos" element={
                  <PrivateRoute>
                    <Articulos />
                  </PrivateRoute>
                } />

                <Route path="/mi-cuenta" element={
                  <PrivateRoute>
                    <Perfil />
                  </PrivateRoute>
                } />

                <Route path="/carrito" element={
                  <PrivateRoute>
                    <CarritoCompras />
                  </PrivateRoute>
                } />

                <Route path="/mis-compras" element={
                  <PrivateRoute>
                    <MisCompras />
                  </PrivateRoute>
                } />

                {/* <Route path="/tienda" element={<Tienda />} /> */}
                {/* <Route path="/articulos" element={<Articulos />} /> */}
                {/* <Route path="/mi-cuenta" element={<Perfil />} /> */}
                {/* <Route path="/carrito" element={<CarritoCompras />} /> */}
                <Route path="/planta/:id" element={<DetalleProducto />} />
                <Route path="/info-blog/:id" element={<DetalleArticulo />} />
            </Routes>
        </BrowserRouter>
          <FooterPrin />

    </MyContext.Provider>
  );
}

export default App;
