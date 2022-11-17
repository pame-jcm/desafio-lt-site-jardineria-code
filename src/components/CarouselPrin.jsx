import { Carousel } from 'react-bootstrap';
import Carousel1 from '../assets/img/disfruta_tu_jardin_9.png';
import Carousel2 from '../assets/img/disfruta_tu_jardin_9.jpg';
import Carousel3 from '../assets/img/disfruta_tu_jardin_7.jpg';

const CarouselPrin = () => {
    
  return (
    <>
         <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Carousel1}
                alt="First slide"
                height="400px"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Carousel2}
                alt="Second slide"
                height="400px"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Carousel3}
                alt="Third slide"
                height="400px"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </>
  )
}

export default CarouselPrin;