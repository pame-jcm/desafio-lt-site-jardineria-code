import React from 'react'
import { Modal, Col, ProgressBar, Button } from 'react-bootstrap';

const ModalDetalleCompra = (props) => {

  console.log(props.objProducto);
    
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {props.message}
            </p>
            <div className='d-flex justify-content-around text-center'>
              <Col>algo 0</Col>
              <Col>algo 1</Col>
              <Col>algo 2</Col>
              <Col>algo 3</Col>
              <Col>algo 4</Col>
            </div>
            <div>
              <ProgressBar striped variant="green" now={40} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="green text-white fw-bold" onClick={props.onHide}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default ModalDetalleCompra