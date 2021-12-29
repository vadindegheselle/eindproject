import React from 'react'
import { Link } from "react-router-dom";

const  eersteStyle = {
  color: '#FFFAFA',
   lineHeight: 5,
   fontFamily: 'Helvetica',
   fontSize: 40,
   padding: '1.5em',
}

const  tweedeStyle = {
  color: '#FFB6C1',
  fontFamily: 'Helvetica Light',
  fontSize: 35,
   lineHeight: 1.6,
   padding: '1.5em',
  }

 
const Home = () => {
    return (
    <div style={tweedeStyle}>
        
        <div >
          <Link to="/architecture">
          <img 
            class="rounded-circle z-depth-2"
           width="500"
           height="500"
           src="http://localhost:5000/vadindegheselle/images/img7.jpg" />
          </Link>
          
          <Link to="/joinus">
          <img 
          class="rounded-circle z-depth-2"
           width="250"
           height="250"
           src="http://localhost:5000/vadindegheselle/images/img15.jpg" />
          </Link>
        
        </div>
       
  
                 
   </div>
       )
}

export default Home;
