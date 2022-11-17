import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const FooterPrin = () => {
  return (
    <>

        <footer className='bg-green-dark text-white w-100 pt-5 pb-5'>
            <Container>
                <Row>
                    <Col> <hr className='opacity-100 rounded ms-3'/> </Col>
                    <Col> <h3 style={{textAlign:'center'}}>El Jardín de Josefina</h3> </Col>
                    <Col> <hr className='opacity-100 rounded me-3'/> </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Visítanos</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium deserunt possimus natus aperiam, soluta adipisci! Pariatur magnam neque debitis voluptatem accusamus nostrum at dolores accusantium quisquam. Iure voluptatem quam quos?</p>
                    </Col>
                    <Col>
                        <h5>Llámanos</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium deserunt possimus natus aperiam, soluta adipisci! Pariatur magnam neque debitis voluptatem accusamus nostrum at dolores accusantium quisquam. Iure voluptatem quam quos?</p>
                    </Col>
                    <Col>
                        <h5>Enlaces de Interes</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium deserunt possimus natus aperiam, soluta adipisci! Pariatur magnam neque debitis voluptatem accusamus nostrum at dolores accusantium quisquam. Iure voluptatem quam quos?</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    </>
  )
}

export default FooterPrin