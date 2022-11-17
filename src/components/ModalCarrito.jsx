import { Modal, Button } from 'react-bootstrap';
import MyContext from '../MyContext';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const ModalCarrito = ({producto, showState, onHide}) => {

    const { carrito, setCarrito, listProducto, totalCompra, setTotalCompra } = useContext(MyContext);
    const setActiveClass = ({isActive}) => (isActive ? 'activeNav btn btn-green-dark text-white fw-bold' : 'non-activeNav btn btn-green-dark text-white fw-bold');

    const addProductoCarrito = (id) => {
      const objProducto = listProducto.find(prod => prod.id === id);
      let total = 0; 
      
      const arrayProducto = carrito.map(prod => {
          if (prod.objProducto.id === id) {
              prod.cantidad = prod.cantidad +1;
              total = totalCompra + prod.objProducto.price;
          }

          return prod;
      });
      

      const productoCarrito = carrito.find(prod => prod.objProducto.id === id);

      productoCarrito ?? arrayProducto.push({objProducto: objProducto, cantidad: 1});
      
      setCarrito(arrayProducto);
      setTotalCompra(total);
    } 

  const deleteProductoCarrito = (id) => {

      let total = 0;        
      let arrayProducto = carrito.map(prod => {
          if (prod.objProducto.id === id && prod.cantidad > 0) {
            prod.cantidad = prod.cantidad - 1;
              total = totalCompra - prod.objProducto.price;
          }

          return prod;
      });

      setCarrito(arrayProducto.filter(prod => prod.cantidad > 0));
      setTotalCompra(total);
  }

  return (
    <Modal
      show={showState}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-green-dark fw-bold">
          Ira directo a tu Carro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-green-dark fw-bold">{producto?.objProducto?.name}</h4>
        <div className="d-flex justify-content-between align-items-end">
            <div className="ms-2 me-auto">
                    
                <strong>Ingredientes:</strong> {producto?.objProducto?.ingredients.reduce((acu, ingredients) => `${acu} ${ingredients},`,'')}
            </div>

            <div className='ms-2 me-3'>
                Valor: <strong>${producto?.objProducto?.price.toString().replace( /(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong>
            </div>

            <Button size="sm" variant="primary" onClick={() => deleteProductoCarrito(producto.objProducto.id)}>-</Button>
            <h6 className='ms-3 me-3'>{producto?.cantidad}</h6>
            <Button size="sm" variant="danger" onClick={() => addProductoCarrito(producto.objProducto.id)}>+</Button>

            <div className='ms-2 me-3'>
                <strong>${(producto?.objProducto?.price * producto?.cantidad).toString().replace( /(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</strong>
            </div>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="damasco text-white fw-bold" onClick={onHide}>Seguir Comprando</Button>
        <NavLink className={setActiveClass} to="/carrito">Ir al Carro</NavLink>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCarrito;