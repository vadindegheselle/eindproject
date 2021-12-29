import { Carousel } from 'react-bootstrap'

const  eersteStyle = {
    color: '#2C2E2E',
     lineHeight: 2,
     fontFamily: 'Helvetica',
     fontSize: 20,
     padding: '4em',
  }

const Project1 = () => {
    return (
        <div style={eersteStyle}>
            <h4>Ontwerpleer 2: Open Oproep</h4>
            <p>Together with Simon Baecke and Stef Lemmens, three collages were made to represent the school building by Puls Architecten </p>
            <Carousel fade variant="dark">
                                    <Carousel.Item>
                                      <img
                                        width="500"
                                        height="500"
                                        src="http://localhost:5000/vadindegheselle/images/img7.jpg"
                                      />
                                      <Carousel.Caption>
                                      </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                      <img
                                        width="500"
                                        height="500"
                                        src="http://localhost:5000/vadindegheselle/images/img8.png"
                                      />

                                      <Carousel.Caption>
                                      </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                      <img
                                        width="500"
                                        height="500"
                                        src="http://localhost:5000/vadindegheselle/images/img9.png"
                                      />

                                      <Carousel.Caption>
                                      </Carousel.Caption>
                                    </Carousel.Item>
                                  </Carousel>
        </div>

    
    )
  }
  
  export default Project1;