import React from 'react';

const  eersteStyle = {
  color: '#2C2E2E',
   lineHeight: 2,
   fontFamily: 'Helvetica',
   fontSize: 20,
   padding: '4em',
}

 const Contact = () => {
   return (
    <div className="col-lg-10 col-xm-12" style={eersteStyle}>
      <p> VDG Architecture</p> 
              <p>Vadin De Gheselle</p>
              <p>+32494786100</p>
              <p>Vadin.DeGheselle@UGent.be</p>
              <p>Opvoedingstraat 165</p>
    </div>

     );
 }
  
 export default Contact;

