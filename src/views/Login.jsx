import { useState } from "react";
import { useContext } from "react";
import { Container, Form, Button } from "react-bootstrap"
import ModalInfo from "../components/ModalInfo";
import MyContext from '../MyContext';


const Login = () => {

  const {usuario, setUsuario} = useContext(MyContext);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [modalShow, setModalShow] = useState({title:"", message:"", state:false});

  const handleIngreso = () => {

    if( usuario ){
      if (usuario.nombre_usuario === user && usuario.pass === pass){
        
        setUsuario({...usuario, nombre_usuario: user, pass: pass, auth: true });
        setModalShow({title:"Información", message:"Ingreso Exitoso!!!", state:true});
      }else{

        setModalShow({title:"Alerta", message:"Usuario No Válido", state:true});
      }

    }else{

        setModalShow({title:"Alerta", message:"Usuario No Registrado", state:true});
    }
  }

  return (
    <>
      <div className='bg-granite'>
          <Container className='divHeightLogin'>

              <div className='bg-green-soft divMensajeLogin'>

                {/* <h3 className='m-0'>Registrate</h3> */}

                <div className='bg-green divLogin'>
                <h3 className="text-center mt-4 text-white fw-bold">Login</h3>
                <Form className='p-5 pt-1 text-white fw-semibold'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control placeholder="Ingrese Nombre Usuario"
                            type="text" 
                            name="user" 
                            value={user}
                            onChange={(e) => setUser(e.target.value)}  />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control placeholder="Ingrese Contraseña" 
                            type="password" 
                            name="pass" 
                            value={pass}
                            onChange={(e) => setPass(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Recuerdame" />
                    </Form.Group>

                    <div className="d-flex justify-content-center">
                      <Button variant="damasco text-white fw-semibold" onClick={() => handleIngreso()}>
                        Ingresar
                      </Button>
                    </div>
                </Form>
                
                </div>

              </div>
          
        
          </Container>
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

export default Login