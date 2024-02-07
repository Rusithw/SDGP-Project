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
        <h1><strong> Our Team </strong></h1>
      </div>
      <div class="container">
            <div class="image">
                <img src="/Images/Rusith.png" alt="#" />
            </div>
            <div class="text">
                <p> Rusith Wijayanayake <br/> rusith.20221430@iit.ac.lk </p> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus deleniti nam perferendis sequi. Veritatis delectus ab neque fugit, distinctio necessitatibus ipsa natus deleniti officiis voluptatum molestiae qui magni dicta.</p>
            </div>
        </div>



        <div class="container">
            <div class="image">
                <img src="/Images/Maleesha.png" alt="#" />
            </div>
            <div class="text">
                <p> Maleesha Shavindi <br/> maleesha.20220977@iit.ac.lk </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus deleniti nam perferendis sequi. Veritatis delectus ab neque fugit, distinctio necessitatibus ipsa natus deleniti officiis voluptatum molestiae qui magni dicta.</p>
            </div>
        </div>

        <div class="container">
            <div class="image">
                <img src="/Images/Devindi.png" alt="#" />
            </div>
            <div class="text">
                <p> Devindi Fernando <br/> devindi.20220431@iit.ac.lk </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus deleniti nam perferendis sequi. Veritatis delectus ab neque fugit, distinctio necessitatibus ipsa natus deleniti officiis voluptatum molestiae qui magni dicta.</p>
            </div>
        </div>

        <div class="container">
            <div class="image">
                <img src="/Images/Lisath.png" alt="#" />
            </div>
            <div class="text">
                <p> Lisath Thisurasiri <br/> lisath.20221943@iit.ac.lk </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ducimus deleniti nam perferendis sequi. Veritatis delectus ab neque fugit, distinctio necessitatibus ipsa natus deleniti officiis voluptatum molestiae qui magni dicta.</p>
            </div>
        </div>
      </div>
    </div>

  )
}

export default AboutUs;