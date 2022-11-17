import { Container, Image, Button } from 'react-bootstrap';
import { useContext } from 'react';
import MyContext from '../MyContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const CarritoCompra = () => {

    const { carrito, setCarrito, totalCompra, setTotalCompra, listProducto } = useContext(MyContext);

    const addProductoCarrito = (id) => {
        const objProducto = listProducto.find(prod => prod.id === id);
        let total = 0; 
        
        const arrayProducto = carrito.map(producto => {
            if (producto.objProducto.id === id) {
                producto.cantidad = producto.cantidad +1;
                total = totalCompra + producto.objProducto.price;
            }

            return producto;
        });
        

        const productoCarrito = carrito.find(prod => prod.objProducto.id === id);

        productoCarrito ?? arrayProducto.push({objProducto: objProducto, cantidad: 1});
        
        setCarrito(arrayProducto);
        setTotalCompra(total);
    }

    const deleteProductoCarrito = (id) => {

        let total = 0;        
        let arrayProducto = carrito.map(producto => {
            if (producto.objProducto.id === id && producto.cantidad > 0) {
                producto.cantidad = producto.cantidad - 1;
                total = totalCompra - producto.objProducto.price;
            }

            return producto;
        });

        setCarrito(arrayProducto.filter(prod => prod.cantidad > 0));
        setTotalCompra(total);
    }


  return (
    <>
        <Container className='mt-3' style={{minHeight:'50vh'}}>
            <strong><h4>Carrito de Compras:</h4></strong>
            
                {carrito.length > 0 ? carrito.map(producto => (
                    <div
                        className="d-flex justify-content-between align-items-end align-items-center"
                        key={producto.objProducto.id}
                    >
                      <Image roundedCircle='true' 
                           src={ producto.objProducto.img } 
                           width='100px' 
                           height='100px' />

                        <div className="ms-2 me-auto">
                            <h3 className="fw-bold text-granite">{producto.objProducto.name}</h3>
                            <strong>Ingredientes:</strong> {producto.objProducto.ingredients.reduce((acu, ingredients) => `${acu} ${ingredients},`,'')}
                        </div>

                        <div className='ms-2 me-3'>
                            Valor: <strong>${producto.objProducto.price}</strong>
                        </div>

                        <Button variant="primary" onClick={() => deleteProductoCarrito(producto.objProducto.id)}>-</Button>
                        <h6 className='ms-3 me-3'>{producto.cantidad}</h6>
                        <Button variant="danger" onClick={() => addProductoCarrito(producto.objProducto.id)}>+</Button>

                        <div className='ms-2 me-3'>
                            <strong>${producto.objProducto.price * producto.cantidad}</strong>
                        </div>
                    </div>
                )) : <h4 className="text-center">
                        <FontAwesomeIcon icon={faCartArrowDown} className='me-3'/>
                        Carrito Vacío
                    </h4> }

            <div className='d-flex flex-column align-items-end p-5'>
                <h3>Total Compra: ${totalCompra}</h3>
                <Button variant="success">Ir a Pagar</Button>
            </div>
        </Container>
    </>
  )
}

export default CarritoCompra