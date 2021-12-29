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
     display: 'flex',
    }


const Architecture = () => {
    return (
    <div>
        <div style={tweedeStyle} >
        </div>
        
        <div>  
        <Link to="/project1">
            
              <img 
              class="rounded-circle z-depth-2"
           width="500"
           height="500"
           src= "http://localhost:5000/vadindegheselle/images/img7.jpg" />
        </Link>
                       
        <Link to="/project2">
            
            <img 
            class="rounded-circle z-depth-2"
         width="500"
         height="500"
         src="http://localhost:5000/vadindegheselle/images/img10.png" />
      </Link>
        </div>

    </div>
       
        
    )
}

export default Architecture;