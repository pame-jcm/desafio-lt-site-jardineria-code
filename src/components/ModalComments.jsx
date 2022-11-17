import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const ModalComments = ({producto, showState, onHide}) => {

    //const { listProducto } = useContext(MyContext);
    const [comment, setComment] = useState('');

    
  return (
    <Modal
      show={showState}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-green-dark fw-bold">
          Dejanos tus Comentarios
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-end">
            <div className="ms-2 me-auto">
                Comentanos tu experiencia con el producto, <strong>{producto?.name}</strong>
            </div>
            <div>
              valoracion
            </div>
        </div>

        <div>
              <Form className='px-5 pt-3'>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Control as="textarea" rows={3} size="sm"  placeholder="Ingresa tus Comentarios"
                        type="text" 
                        name="comment" 
                        value={comment}
                        onChange={(e) => setComment(e.target.value)} />
                  </Form.Group>
              </Form>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="damasco text-white fw-bold" onClick={onHide}>Cancelar</Button>
        <Button variant="green text-white fw-bold" onClick={onHide}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComments;