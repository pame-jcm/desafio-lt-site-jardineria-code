
import imgSection from '../assets/img/variedad_suculentas.jpg';
import imgSection2 from '../assets/img/plantas_ventana.png';
import { Image } from 'react-bootstrap';

const SectionInformativo = () => {
  return (
  <>

        <div className='divBase'>
            <div className='divSection'>
                <h3>titulo 3</h3>
                <p>Cuerpo de text lorem ipsum dolor sit amet, consetetur sadipsicing elitr, sed diam nonumy eirmond tenpor invidunt */</p>
            </div>
            <Image className='divImg' src={imgSection} />
        </div>
        <div className="divBase2 mb-5">
            <Image className='imgBase' src={imgSection2}/>
            <div className='divSection2'>
                <h3>titulo 3</h3>
                <p>Cuerpo de text lorem ipsum dolor sit amet, consetetur sadipsicing elitr, sed diam nonumy eirmond tenpor invidunt */</p>
            </div>
        </div>
        
        
    
  </>
  )
}

export default SectionInformativo;