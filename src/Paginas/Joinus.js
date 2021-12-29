import React from "react";

const  eersteStyle = {
  color: '#2C2E2E',
   lineHeight: 2,
   fontFamily: 'Helvetica',
   fontSize: 20,
   padding: '4em',
}

const About = () => {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img
                className="profile-img"
                class="rounded-circle"
                src="http://localhost:5000/vadindegheselle/images/pfimg.png"
                alt="profielfoto"
                width="400px"
                height="600px"
              />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12" style={eersteStyle}>
            <h1>who are we?</h1>
            <p>
     My name is Vadin De Gheselle, I am a 22 year old student architectural engineering. This site was made for the advanced topic Building Informatics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;