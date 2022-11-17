
import { Image, Row, Col, Container } from 'react-bootstrap';

import imgPlantas from '../assets/img/plantas.jpg';
import imgFlores from '../assets/img/flores.jpg';
import imgSuculentas from '../assets/img/suculentas.png';
import imgFrutales from '../assets/img/frutales.jpg';
import imgHerramientas from '../assets/img/herramientas.jpg';

const CardsFiltroTipo = ({ setSelection }) => {
  return (
    <>
        <Container style={{paddingTop:'25px', paddingBottom:'125px'}}>
            <Row>
                <Col style={{position:'relative'}}>
                    <Image roundedCircle='true' 
                           src={ imgPlantas } 
                           width='200px' 
                           height='200px' 
                           style={{cursor:'pointer', filter: 'brightness(40%)'}}
                           onClick={() => console.log('suculentas')}/>

                        <h3 className='text-white fw-bold' style={{cursor:'pointer', position:'absolute', top:'40%', left:'23%'}}>Plantas</h3>
                </Col>
                <Col style={{position:'relative'}}>
                    <Image roundedCircle='true' 
                           src={ imgFlores } 
                           width='200px' 
                           height='200px' 
                           style={{cursor:'pointer', filter: 'brightness(40%)'}}
                           onClick={() => console.log('suculentas')}/>

                            <h3 className='text-white fw-bold' style={{cursor:'pointer', position:'absolute', top:'40%', left:'26%'}}>Flores</h3>
                </Col>
                <Col style={{position:'relative'}}>
                    <Image roundedCircle='true' 
                           src={ imgSuculentas } 
                           width='200px' 
                           height='200px' 
                           style={{cursor:'pointer', filter: 'brightness(40%)'}}
                           onClick={() => console.log('suculentas')}/>

                        <h3 className='text-white fw-bold' style={{cursor:'pointer', position:'absolute', top:'40%', left:'13%'}}>Suculentas</h3>
                </Col>
                <Col style={{position:'relative'}}>
                    <Image roundedCircle='true' 
                           src={ imgFrutales } 
                           width='200px' 
                           height='200px' 
                           style={{cursor:'pointer', filter: 'brightness(40%)'}}
                           onClick={() => console.log('suculentas')}/>

                        <h3 className='text-white fw-bold' style={{cursor:'pointer', position:'absolute', top:'40%', left:'21%'}}>Frutales</h3>
                </Col>
                <Col style={{position:'relative'}}>
                    <Image roundedCircle='true' 
                           src={ imgHerramientas } 
                           width='200px' 
                           height='200px' 
                           style={{cursor:'pointer', filter: 'brightness(40%)'}}
                           onClick={() => console.log('suculentas')}/>

                        <h3 className='text-white fw-bold' style={{cursor:'pointer', position:'absolute', top:'40%', left:'8%'}}>Herramientas</h3>

                </Col>
            </Row>
        </Container>
        
    </>
  )
}

export default CardsFiltroTipo;