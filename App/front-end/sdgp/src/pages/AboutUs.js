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
                <p>The team Leader for the project.Is a Computer Science Undergraduate in IIT and was involved in managing the team and the software project accordingly. Was involved mainly in contributing to the Profile, Prediction and Login Pages of the software  Application.
                </p>
            </div>
        </div>

        <div class="container1">
            <div class="image1">
                <img src="/Images/Maleesha.png" alt="#" />
            </div>
            <div class="text1">
                <p className='text2'> Maleesha Shavindi <br/> maleesha.20220977@iit.ac.lk </p>
                <p>A team member for the software project. An Undergraduate in IIT undergoing the Computer Science degree. Involved mainly in creating the home page in the prediction application.</p>
            </div>
        </div>

        <div class="container1">
            <div class="image1">
                <img src="/Images/Lisath.png" alt="#" />
            </div>
            <div class="text1">
                <p className='text2'> Lisath Thisurasiri <br/> lisath.20221943@iit.ac.lk </p>
                <p>Team member in the Software development project. Currently undergoing the Computer Science degree in IIT as an undergraduate, and contributed to making the My Account page creating the Update operation.
                </p>
            </div>
        </div>
        
        <div class="container1">
            <div class="image1">
                <img src="/Images/Devindi.png" alt="#" />
            </div>
            <div class="text1">
                <p className='text2'> Devindi Fernando <br/> devindi.20220431@iit.ac.lk </p>
                <p>A team member for this software development project. An undergraduate in IIT following the Computer Science course. Was involved in creating the About Us and program details page and was in charge of adding CSS to the software application.
                </p>
            </div>
        </div>

        <div className='container1'>
            <img src="/Images/team.png" alt="#" />
        </div>

      </div>

        <br /><br />
        <br /><br />
    </div>

  )
}

export default AboutUs;