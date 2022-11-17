import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const ModalInfo = (props) => {
    
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="green text-white fw-bold" onClick={props.onHide}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default ModalInfo