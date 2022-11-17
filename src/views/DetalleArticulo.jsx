import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Image, Row } from 'react-bootstrap';
import MyContext from '../MyContext';

const DetalleArticulo = () => {

    const { id } = useParams();
    const { listArticulos } = useContext(MyContext);
    const articulo = listArticulos.find(art => art.id === id);
            
  return (
    <>

        <Container>
            
                
                <Row className='d-flex justify-content-center'>
                    <h1 className='text-center text-granite'><strong>{articulo?.titulo}</strong></h1>
                    <hr />
                    <Image src={articulo?.img} style={{ width:'35rem' }}/>
                    
                </Row>
                <hr />
                <Row className='mb-3 px-5'> {articulo?.desc}</Row>
                
            
        </Container>
       
    </>
  )
}

export default DetalleArticulo;