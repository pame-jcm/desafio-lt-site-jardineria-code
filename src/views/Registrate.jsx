import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import MyContext from '../MyContext';

const Registrate = () => {

  const navigate = useNavigate();

  const { setUsuario } = useContext(MyContext);
  const [user, setUser] = useState('');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [pass, setPass] = useState('');

  const handleRegistro = () => {

    setUsuario({nombre_usuario:user, nombre_apellido:nombre, correo:correo, telefono:telefono, direccion_despacho:direccion, pass:pass, auth:true});
    navigate('/login');
  }

  return (
    <>
      <div className='bg-granite'>
          <Container className='divHeightRegistrate'>

              <div className='bg-green divMensaje'>

                <h3 className='m-0'>Registrate</h3>

                <div className='divRegistrate'>

                  <h3 className="text-center mt-4 text-white fw-bold">Registrate</h3>
                <Form className='p-5 pt-1'>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Nombre Usuario</Form.Label>
                      <Form.Control size="sm"  placeholder="Ingresa un Nombre de Usuario"
                        type="text" 
                        name="user" 
                        value={user}
                        onChange={(e) => setUser(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Nombre y Apellido</Form.Label>
                      <Form.Control size="sm" placeholder="Ingresa Nombre y Apellido"
                        type="text" 
                        name="nombre" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Correo</Form.Label>
                      <Form.Control size="sm" placeholder="Ingresa Correo" 
                        type="email" 
                        name="correo" 
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Telefono de Contacto</Form.Label>
                      <Form.Control size="sm" placeholder="Ingresa Telefono"
                        type="text" 
                        name="telefono" 
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label>Dirección Despacho</Form.Label>
                      <Form.Control size="sm" placeholder="Ingresa Dirección de Despacho"
                        type="text" 
                        name="direccion" 
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control size="sm" placeholder="Password" 
                        type="password" 
                        name="pass" 
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}/>
                  </Form.Group>
                  
                  <div className="d-flex justify-content-center pt-3">
                      <Button variant="damasco text-white fw-semibold" onClick={() => handleRegistro()}>
                          Guardar Datos
                      </Button>
                  </div>
                </Form>
                </div>

              </div>
          
        
          </Container>
      </div>
    </>
  )
}

export default Registrate;