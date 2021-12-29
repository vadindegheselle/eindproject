import { Carousel } from 'react-bootstrap'


const  eersteStyle = {
    color: '#2C2E2E',
     lineHeight: 2,
     fontFamily: 'Helvetica',
     fontSize: 20,
     padding: '3em',
  }

const Project2 = () => {
    return (
        <div style={eersteStyle}>
            <h4>Masterstudio C: Learning from Milano</h4>
            <p>Together with Cas Vanlangenhove a residential building was designed for the Giardini di Arcadia in Milan </p>
            <Carousel fade variant="dark">
                                    <Carousel.Item>
                                      <img
                                        width="700"
                                        height="500"
                                        src="http://localhost:5000/vadindegheselle/images/img10.png"
                                      />
                                      <Carousel.Caption>
                                      </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                      <img
                                        width="700"
                                        height="500"
                                        src="http://localhost:5000/vadindegheselle/images/img11.png"
                                      />

                                      <Carousel.Caption>
                                      </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                      <img
                                        width="700"
                                        height="500"
                                        src="http://localhost:5000/vadindegheselle/images/img12.png"
                                      />

                                      <Carousel.Caption>
                                      </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                      <img
                                        width="700"
                                        height="500"
                                        src="http://localhost:5000/vadindegheselle/images/img13.png"
                                      />

                                      <Carousel.Caption>
                                      </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                      <img
                                        width="700"
                                        height="500"
                                        src="http://localhost:5000/vadindegheselle/images/img14.png"
                                      />

                                      <Carousel.Caption>
                                      </Carousel.Caption>
                                    </Carousel.Item>
                                  </Carousel>
        </div>

    
    )
  }
  
  export default Project2;