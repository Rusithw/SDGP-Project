import React, { useEffect } from 'react';
import NavBar from './commen/NavBar';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
   const user_session_value =  window.sessionStorage.getItem("user_name");
   if(user_session_value === null || user_session_value === ""){
    navigate("/login");
   }

  }, []);

  return (
    <div className="main">
      <div>
        {/* NavBar is a component */}
        <NavBar value={"home"}/>
        <div className="text">
          <h1><strong>Career Compass </strong></h1>
        </div>
        <div className='introduction'>
          <p>
            Ready to take control of your career? <br/>
            Dive into our intuitive platform and unleash the potential that lies within you. 
            Get started today and embark on a path towards success and fulfillment.
          </p>
        </div>
        {/* <div className="paragraph">
          <p>
            
          </p>
        </div> */}
      </div>
    
    </div>
    
  )
}

export default Home;