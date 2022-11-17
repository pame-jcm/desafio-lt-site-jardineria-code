
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import MyContext from '../MyContext';

const Articulos = () => {

    const navigate = useNavigate();
    const { listArticulos } = useContext(MyContext);
    
    const detailBlog = (id) => {
        try {
            navigate(`/info-blog/${id}`);
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>

        <Container>
          {listArticulos?.map(({id, titulo, desc, img }, index) => (
              <Card key={index} border="white" className="m-4">
                <Card.Body>
                    
                    <Row>
                        <Col xs={4}><Card.Img variant="top"  src={img} style={{ width:'18rem'}}/></Col>
                        <Col>
                            <Row className="text-granite"> 
                            <h4> <strong>{titulo}</strong> </h4>
                            </Row>
                            <hr />
                            <Row className='mb-3'> {desc}</Row>
                        </Col>
                    </Row>
                    <Row>
                      <Col className='d-flex justify-content-end'>
                        <Button className="text-white fw-bold mx-4" variant="damasco" onClick={() => detailBlog(id)}>
                              Lee más <FontAwesomeIcon icon={faArrowAltCircleRight} className='me-1' />
                        </Button>
                      </Col>
                    </Row>
                    
                </Card.Body>
                <hr />
              </Card>
          ))}
            
        </Container>
       
    </>
  )
}

export default Articulos;