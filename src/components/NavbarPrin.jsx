import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import MyContext from '../MyContext';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUserCircle, faUserCheck, faRightFromBracket, faRightToBracket, faShop, faSplotch } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons';

const NavbarPrin = () => {
  
  const { totalCompra, usuario, setUsuario } = useContext(MyContext);

  const setActiveClass = ({isActive}) => (isActive ? 'activeNav' : 'non-activeNav');

  const handleLogout = () => {

    setUsuario({...usuario, auth: false });
     
  }
        

  return (
    <Navbar bg="green-dark" expand="lg" className="px-5">
      <>
        <Navbar.Brand>
            <NavLink className={ setActiveClass } to="/home" style={{ textDecoration:'none', padding:'9px', color: 'white', fontWeight:'600' }}>
            El Jardin de Josefina
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
            {usuario?.auth ? 
            <Nav className="justify-content-end flex-grow-1">
                <NavLink className={ setActiveClass } to="/tienda" style={{ textDecoration:'none', padding:'9px' , color: 'white'}}>
                  <h6 > 
                      <FontAwesomeIcon icon={faShop} className='mx-1 fa-sm' />      
                      Tienda 
                  </h6> 
                </NavLink>
                <NavLink className={ setActiveClass } to="/articulos" style={{ textDecoration:'none', padding:'9px' , color: 'white'}}>
                  <h6 > 
                      <FontAwesomeIcon icon={faSplotch} className='mx-1 fa-sm' />      
                      Artículos 
                  </h6> 
                </NavLink>
                <NavLink className={ setActiveClass } to="/mi-cuenta" style={{ textDecoration:'none', padding:'9px' , color: 'white'}}>
                  <h6 > 
                      <FontAwesomeIcon icon={faUserCircle} className='mx-1' />      
                      Mi Cuenta 
                  </h6> 
                </NavLink>
                <NavLink className={ setActiveClass } to="/carrito" style={{ textDecoration:'none', padding:'9px' , color: 'white'}}>
                  <h6 > 
                      <FontAwesomeIcon icon={faCartShopping} className='mx-1 fa-sm' />      
                      <strong className="mb-2"> $ {totalCompra.toString().replace( /(\d)(?=(\d{3})+(?!\d))/g, '$1.')} </strong> 
                  </h6> 
                </NavLink>
                <NavLink className={ setActiveClass } to="/home" style={{ textDecoration:'none', padding:'9px' , color: 'white'}} onClick={()=>handleLogout()}>
                  <h6 > 
                      <FontAwesomeIcon icon={faRightFromBracket} className='mx-1 fa-sm' />      
                      Cerrar Sesión
                  </h6> 
                </NavLink>
            </Nav>
            : 
            <Nav className="justify-content-end flex-grow-1">
                <NavLink className={ setActiveClass } to="/registrate" style={{ textDecoration:'none', padding:'9px' , color: 'white', fontWeight:'700'}}>
                  <h6 > 
                  <FontAwesomeIcon icon={faUserCheck} className='ms-2 me-1' />      
                      Registrate 
                  </h6> 
                </NavLink>
                <NavLink className={ setActiveClass } to="/login" style={{ textDecoration:'none', padding:'9px' , color: 'white', fontWeight:'700'}}>
                  <h6 > 
                      <FontAwesomeIcon icon={faRightToBracket} className='ms-2 me-1' />      
                      Login
                  </h6> 
                </NavLink>
            </Nav>
            }
          
        </Navbar.Collapse>
      </>
    </Navbar>
  )
}

export default NavbarPrin