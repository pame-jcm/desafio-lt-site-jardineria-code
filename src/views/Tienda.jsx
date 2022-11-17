
import ModalCarrito from "../components/ModalCarrito";

import { Container, Card, Row, Col, Button } from 'react-bootstrap';

import { useContext,useState } from "react";
import { useNavigate } from 'react-router-dom';
import MyContext from '../MyContext';
import Heart from "../components/Heart";

const Tienda = ({favorito}) => {

    const navigate = useNavigate();
    const { carrito, setCarrito, totalCompra, setTotalCompra, listProducto, setListProducto } = useContext(MyContext);
    const [modalShow, setModalShow] = useState({showState:false, objProducto:{}});

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

        setModalShow({showState:true, objProducto: objArrayProducto});        
        setCarrito(arrayProducto);
        
        setTotalCompra(totalCompra + objProducto.price);
    }

    const detailProducto = (id) => {
        try {
            navigate(`/planta/${id}`);
            
        } catch (error) {
            console.log(error);
        }
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
       <Container className="mb-5">
            <Row>
                {listProducto?.filter(prod => { 
                    
                    if (favorito === 'todo'){
                        return prod;
                    }
                    else if(prod.favorito === true){
                        return prod;
                    }else{
                        return '';
                    }

                    }).map(({id, name, price, img, favorito, ingredients}, index) => (
                    <Col key={index} md={3} sm={3} className="d-flex justify-content-center">
                        <Card className="mt-4 imgCard" style={{ width: '17rem' }}>
                            <Card.Img variant="top" src={img} height="220rem" />
                            <Button variant="green" style={{height:"0rem"}} onClick={() => setFavorito(id)}>
                                <Heart filled={favorito} />
                            </Button>
                            
                            <Card.Body>
                            <Card.Title className="d-flex justify-content-center fw-semibold text-granite">{name}</Card.Title>
                                <hr />
                            
                                    {ingredients?.map((ingredients, ind) => (
                                        <Col key={ind} className="text-granite fw-semibold">  {ingredients} </Col>
                                    ))}

                                <hr />
                                <Row>
                                    <Col className="d-flex justify-content-end text-granite fw-bold"><h3>${price}</h3></Col>
                                </Row>
                                <Row>
                                    <Col md={6} xs={6} className="d-flex justify-content-start">
                                        <Button className="text-white fw-semibold" size="sm" variant="green-soft" 
                                            onClick={() => detailProducto(id)}>Detalles
                                        </Button>
                                    </Col>
                                    <Col md={6} xs={6} className="d-flex justify-content-end">
                                        <Button className="text-white fw-semibold" size="sm" variant="green-dark" 
                                            onClick={() => addProductoCarrito(id)}>
                                            {/* <FontAwesomeIcon icon={faCartPlus} className='me-1' /> */}
                                            Agregar
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

        <ModalCarrito
            showState={modalShow.showState}
            producto={modalShow.objProducto}
            onHide={() => setModalShow({showState:false, objProducto:{}})}
        />
    </>
  )
}

export default Tienda;