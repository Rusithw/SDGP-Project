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
        <div className='background-image'>
          <img src='Images/home.jpg"'></img>

        </div>
       
     
      </div>
    
    </div>
    
  )
}

export default Home;