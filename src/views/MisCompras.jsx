import { Container, Image, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import MyContext from '../MyContext';
import ModalDetalleCompra from '../components/ModalDetalleCompra';
import ModalCarrito from '../components/ModalCarrito';
import ModalComments from '../components/ModalComments';

const MisCompras = () => {

    const endPoint = '../misCompras.json';
    const [misCompras, setMisCompras] = useState([]);
    const { carrito, setCarrito, totalCompra, setTotalCompra, listProducto } = useContext(MyContext);
    const [modalShowCarrito, setModalShowCarrito] = useState({showState:false, objProducto:{}});
    const [modalShowDetalleCompra, setModalShowDetalleCompra] = useState({title:"", message:"", state:false});
    const [modalShowComments, setModalShowComments] = useState({ state:false, objProducto:{}});

    useEffect(() => {
        const getMisCompras = async () => {
            try {
                const res = await fetch(endPoint);
                const data = await res.json();
    
                setMisCompras(data);
            } catch (error) {
                console.log(error);
            }
        };
        getMisCompras();
    }, [])

    const handleModalDetalleCompra = (id) => {

        const product = misCompras.filter(prod => prod.id === id);

        setModalShowDetalleCompra({title:"Información", message:"Detalle de tu Compra", objProducto:product, state:true});

    }

    const handleComments = (id) => {

        console.log(id);

        const objProducto = listProducto.find(pro => pro.id === id);

        setModalShowComments({showState:true, objProducto: objProducto});
    }
    

    const addProductoCarrito = async (id) => {

        const objProducto = listProducto.find(pro => pro.id === id);

        const arrayProducto = carrito.map(prod => {
            if (prod.objProducto.id === id) {
                prod.cantidad = prod.cantidad +1;
            }

            return prod;
        });

        const productoCarrito = carrito.find(pro => pro.objProducto.id === id);

        productoCarrito ?? arrayProducto.push({objProducto: objProducto, cantidad: 1});

        const objArrayProducto = await arrayProducto.find(prod => prod.objProducto.id === id);

        setModalShowCarrito({showState:true, objProducto: objArrayProducto});        
        setCarrito(arrayProducto);
        
        setTotalCompra(totalCompra + objProducto.price);
    }


  return (
    <>
        <Container style={{minHeight:'50vh'}}>
            <strong><h4 className='mt-5 text-granite fw-bold'>Mi Historial de Compras:</h4></strong>
            
                {misCompras.length > 0 ? misCompras.map(producto => (
                    
                    <div className="d-flex justify-content-between align-items-center"
                        key={producto.id}>

                        <div className="d-flex my-4 justify-content-between align-items-end align-items-center col-sm-12 col-md-6 col-lg-9">
                                <Image roundedCircle='true' 
                                    src={ producto.img } 
                                    width='100px' 
                                    height='100px' />

                                <div className="mx-4 w-75">
                                    <h5 className="fw-bold text-granite">{producto.name}</h5>
                                    <p className="text-granite">{producto.desc}</p>
                                </div>

                                <div className='text-center'>
                                    Valor: <strong>${producto.price}</strong>
                                </div>
                        </div>

                        <div className='col-sm-12 col-md-6 col-lg-2'>
                            <div className='d-flex flex-column '>
                                <Button size="sm" variant="green text-white" className='fw-bold m-1' onClick={() => addProductoCarrito(producto.id)}>Volver a Comprar</Button>
                                <Button size="sm" variant="green-soft text-white" className='fw-bold m-1' onClick={() => handleModalDetalleCompra(producto.id)}>Detalle de Compra</Button>
                                <Button size="sm" variant="damasco text-white" className='fw-bold m-1' onClick={() => handleComments(producto.id)}>Comentar</Button>
                            </div>
                        </div>

                    </div>
                )) : <h4 className="text-center">
                        <FontAwesomeIcon icon={faCartArrowDown} className='me-3'/>
                        No Existe Historial de Compras
                    </h4> }

        </Container>

        <ModalDetalleCompra
            show={modalShowDetalleCompra.state}
            onHide={() => setModalShowDetalleCompra({title:"", message:"", state:false})}
            title={modalShowDetalleCompra.title}
            message={modalShowDetalleCompra.message}
        />

        <ModalCarrito
            showState={modalShowCarrito.showState}
            producto={modalShowCarrito.objProducto}
            onHide={() => setModalShowCarrito({showState:false, objProducto:{}})}
        />

        <ModalComments
            showState={modalShowComments.showState}
            producto={modalShowComments.objProducto}
            onHide={() => setModalShowComments({showState:false, objProducto:{}})}
        />
    </>
  )
}

export default MisCompras;