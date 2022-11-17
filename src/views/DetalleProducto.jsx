import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import ModalCarrito from '../components/ModalCarrito';
import MyContext from '../MyContext';
import Heart from '../components/Heart';
import Comments from '../components/Comments';

const DetalleProducto = () => {

    const { id } = useParams();
    const { carrito, setCarrito, totalCompra, setTotalCompra, listProducto, setListProducto } = useContext(MyContext);
    const [modalShow, setModalShow] = useState({showState:false, objProducto:{}});

    const producto = listProducto.find(prod => prod.id === id);
    
    const addProductoCarrito = async (id) => {

        const objProducto = listProducto.find(prod => prod.id === id);

        const arrayProducto = carrito.map(prod => {
            if (prod.objProducto.id === id) {
                prod.cantidad = prod.cantidad +1;
            }

            return prod;
        });

        const productoCarrito = carrito.find(prod => prod.objProducto.id === id);

        productoCarrito ?? arrayProducto.push({objProducto: objProducto, cantidad: 1});

        const objArrayProducto = await arrayProducto.find(piz => piz.objProducto.id === id);

        setModalShow({showState:true, objProducto: objArrayProducto});
        
        setCarrito(arrayProducto);
        setTotalCompra(totalCompra + objProducto.price);

    }

    const setFavorito = (id) => {
    
        const producto = listProducto.map(prod => {
          if(prod.id === id){
            prod.favorito = !prod.favorito;
          }
          return prod;
        });
    
        setListProducto(producto);
      };
    
    
  return (
    <>

        <Container>
            <Card className="m-4">
            <Card.Body>
                
                <Row>
                    <Col xs={4}><Card.Img variant="top"  src={producto?.img} style={{ width:'18rem'}}/></Col>
                    <Col>
                        <Row> <strong>{producto?.name}</strong> </Row>
                        <hr />
                        <Row className='mb-3'> {producto?.desc}</Row>
                        <Row><strong>Ingredientes:</strong></Row>
                        {producto?.ingredients?.map((ingredients, ind) => (
                            <Row key={ind} className='ms-3'> {ingredients}</Row>
                        ))}
                        <Row className='mt-3'><strong><h3>Precio: ${producto?.price}</h3></strong></Row>
                    </Col>
                </Row>
                
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end">
                <Button className="text-white fw-bold mx-4 imgCora" variant="salmon" onClick={() => setFavorito(id)}>
                    <Heart filled={producto?.favorito}/> {'  '}
                    Me Gusta
                </Button>

                <Button className="text-white fw-bold mx-4" variant="green" onClick={() => addProductoCarrito(id)}>
                <FontAwesomeIcon icon={faCartPlus} className='me-1' />
                    Añadir
                </Button>
            </Card.Footer>
            </Card>

            <Comments />
        </Container>
        <ModalCarrito
            showState={modalShow.showState}
            producto={modalShow.objProducto}
            onHide={() => setModalShow({showState:false, objProducto:{}})}
        />
    </>
  )
}

export default DetalleProducto;