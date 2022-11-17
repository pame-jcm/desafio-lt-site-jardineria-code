import { Col, Form, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import MyContext from "../MyContext";
import { useContext } from "react";
import { useState } from "react";
import ModalInfo from "../components/ModalInfo";

const Perfil = () => {

    const { setUsuario } = useContext(MyContext);
    const [user, setUser] = useState('');
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [pass, setPass] = useState('');

    const [modalShow, setModalShow] = useState({title:"", message:"", state:false});

    const handleActualizaUser = () => {

        setUsuario({nombre_usuario:user, nombre_apellido:nombre, correo:correo, telefono:telefono, direccion_despacho:direccion, pass:pass, auth:true});
        setModalShow({title:"Información", message:"Actualización Exitosa!!!", state:true});
    }

  return (
    <>
        <div className='bg-green text-white px-5 d-flex'>

                <Col md="4" lg="4" className="border-end border-white d-flex flex-column justify-content-center">
                    <FontAwesomeIcon icon={faCircleUser} className='fa-10x py-3' />
                    <hr className="opacity-100 rounded mx-5"/>
                    <h1 className="text-center py-3">User</h1>
                    <div className="px-5 d-flex flex-column">
                        <NavLink to="/mis-compras" style={{ textDecoration:'none', padding:'9px' , color: 'white', fontWeight:'700'}}>
                            <h5 className="fw-bold">Mis Compras</h5>
                        </NavLink>
                        <NavLink to="/tienda/favoritos" style={{ textDecoration:'none', padding:'9px' , color: 'white', fontWeight:'700'}}>
                            <h5 className="fw-bold">Mis Favoritos</h5>
                        </NavLink>
                    </div>
                </Col>

                <Col md={{ span: 7, offset: 1 }} lg={{ span:4, offset:2}} className="px-5">
                    <h3 className="text-center pt-4 text-white fw-bold">Mis Datos</h3>
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
                        <Button variant="damasco text-white fw-semibold" onClick={() => handleActualizaUser()}>
                            Guardar Datos
                        </Button>
                    </div>
                    </Form>
                </Col>

        </div>

        <ModalInfo
            show={modalShow.state}
            onHide={() => setModalShow({title:"", message:"", state:false})}
            title={modalShow.title}
            message={modalShow.message}
        />
    </>
  )
}

export default Perfil