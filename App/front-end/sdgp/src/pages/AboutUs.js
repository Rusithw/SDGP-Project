import React, { useEffect } from 'react';
import NavBar from './commen/NavBar';
import { useNavigate } from "react-router-dom";

function AboutUs() {

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
      <NavBar value={"about_us"} />
      <div className="text">
        <br /><br />
        
        <h1><strong> Our Team </strong></h1>
      </div>
      <br /><br />
        <div class="container1">
            <div class="image1">
                <img src="/Images/Rusith.png" alt="#" />
            </div>
            <div class="text1">
                <p className='text2'> Rusith Wijayanayake <br/> rusith.20221430@iit.ac.lk </p> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus deleniti nam perferendis sequi. Veritatis delectus ab neque fugit, distinctio necessitatibus ipsa natus deleniti officiis voluptatum molestiae qui magni dicta.</p>
            </div>
        </div>

        <div class="container1">
            <div class="image1">
                <img src="/Images/Maleesha.png" alt="#" />
            </div>
            <div class="text1">
                <p className='text2'> Maleesha Shavindi <br/> maleesha.20220977@iit.ac.lk </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus deleniti nam perferendis sequi. Veritatis delectus ab neque fugit, distinctio necessitatibus ipsa natus deleniti officiis voluptatum molestiae qui magni dicta.</p>
            </div>
        </div>

        <div class="container1">
            <div class="image1">
                <img src="/Images/Lisath.png" alt="#" />
            </div>
            <div class="text1">
                <p className='text2'> Lisath Thisurasiri <br/> lisath.20221943@iit.ac.lk </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus deleniti nam perferendis sequi. Veritatis delectus ab neque fugit, distinctio necessitatibus ipsa natus deleniti officiis voluptatum molestiae qui magni dicta.</p>
            </div>
        </div>
        
        <div class="container1">
            <div class="image1">
                <img src="/Images/Devindi.png" alt="#" />
            </div>
            <div class="text1">
                <p className='text2'> Devindi Fernando <br/> devindi.20220431@iit.ac.lk </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus deleniti nam perferendis sequi. Veritatis delectus ab neque fugit, distinctio necessitatibus ipsa natus deleniti officiis voluptatum molestiae qui magni dicta.</p>
            </div>
        </div>

        <div className='container1'>
            <img src="/Images/team.png" alt="#" />
        </div>

      </div>

        <br /><br />
      <div className='container'>
            <div className='box'>
                <h2>Why?</h2>
                <p>Most university students have no definitive idea as to what career pathway is most suitable for them.</p>
            </div>
            <div className='box'>
                <h2>How?</h2>
                <p>Giving accurate predictions on career paths based on a comparison between past students, university data, and user details.</p>
            </div>
            <div className='box'>
                <h2>Mission</h2>
                <p>The mission of career prediction software is to empower and guide graduate and undergraduate students in making informed and strategic decisions about their career paths.</p>
            </div>
        </div>
        <br /><br />
    </div>

  )
}

export default AboutUs;