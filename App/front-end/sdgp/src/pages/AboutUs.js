import React from 'react';
import NavBar from './commen/NavBar';

function AboutUs() {
  return (
    <div className="main">
    <div>
      <NavBar value={"about_us"} />
      <div className="text">
        <h1><strong> Our Team </strong></h1>
      </div>
      <div className="team-images width-100">
        <div className="width-33">
         <div className="space">
          <img src="Images/Rusith.jpg" alt="#" />
          <p> Rusith Wijayanayake <br/> rusith.20221430@iit.ac.lk </p> 
         </div>
        </div>
        <div className="width-33">
          <div className="space">
           <img src="Images/about_us_image.jpg" alt="" />
           <p> Nethmina Fernando <br/> nethmina.20211167@iit.ac.lk </p>
          </div>
         </div>
         <div className="width-33">
          <div className="space">
           <img src="Images/about_us_image.jpg" alt="" />
           <p> Maleesha Shavindi <br/> maleesha.20220977@iit.ac.lk </p>
          </div>
         </div>
         <div className="width-33">
          <div className="space">
           <img src="Images/about_us_image.jpg" alt="" />
           <p> Devindi Fernando <br/> devindi.20220431@iit.ac.lk </p>
          </div>
         </div>
         <div className="width-33">
          <div className="space">
           <img src="Images/about_us_image.jpg" alt="" />
           <p> Lisath Thisurasiri <br/> lisath.20221943@iit.ac.lk </p>
          </div>
         
         </div>
      </div>
    </div>
  </div>

  )
}

export default AboutUs;