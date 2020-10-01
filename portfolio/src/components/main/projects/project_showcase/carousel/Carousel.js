import React,{useState} from "react";
import primary1 from "../carousel/images/img1.png";
import primary2 from "../carousel/images/img2.png";
import primary3 from "../carousel/images/img3.png";
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={primary1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </Carousel.Caption>
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={primary2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={primary3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <div class="deployed_codebase">
              <a href=""><i class="fas fa-globe"></i></a>
              <a href=""><i class="fab fa-github"></i></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };

  export default ControlledCarousel