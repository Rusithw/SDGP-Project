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
       <br /><br /><br />
       <div className='home-background'>        
       </div>
        <div className='content'>
        <h1 className='logo'> <span> Career Prediction</span> <br/> Software </h1>
        <p className='para-content'>Elevate your professional trajectory using our state-of-the-art Career Prediction Software, <br/><br/>where meticulously crafted algorithms are used to generate an accurate <br/><br/>career pathway which is specifically tailored to your profile. <br/><br/> Get informed on degree choices<br/><br/> and modules relevant to those courses and get more predictions based <br/><br/>on them to get a realistic and an ideal career prediction.</p>
      <br /><br /><br /><br />
      <div className='container'>
          <div className='box'>
            <div className='why-img'></div>
                <h2>Why?</h2>
                <br /><br />
                <p>Most university students have no definitive idea as to what career pathway is most suitable for them.</p>
            </div>
            <div className='box'>
            <div className='how-img'></div>
                <h2>How?</h2>
                <br />
                <p>Giving accurate predictions on career paths based on a comparison between past students, university data, and user details.</p>
            </div>
            <div className='box'>
              <div className='mission-img'></div>
                <h2>Mission</h2>
                <p>The mission of career prediction software is to empower and guide graduate and undergraduate students in making informed and strategic decisions about their career paths.</p>
            </div>
          </div>
        <br /><br /><br />
      </div>
    <div className='steps'>
      <h1>How to get a better prediction</h1><br />
      <ol>
        <li><h3>Profile</h3>
          <p>Go to the <strong>Profile</strong> tab. Fill out you profile details. Save your details.</p>
        </li>
        <br />
        <li><h3>Prediction</h3>
          <p>Go to the <strong>Prediction</strong> tab. Check each and every module you are doing. Submit it. Wait for the prediction.</p>
        </li>
        <br />
        <li><h3>Ta Da!</h3>
          <p>After getting the prediction, make your decision. Module information are available on <strong>Program-Details</strong> tab.</p>
        </li>
      </ol>
    </div> 
    </div>
    
  </div>
    
  )
}

export default Home;