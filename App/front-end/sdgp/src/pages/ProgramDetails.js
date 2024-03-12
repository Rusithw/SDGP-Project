import React, { useEffect, useState } from 'react';
import NavBar from './commen/NavBar';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useNavigate } from "react-router-dom";
import './ProgramDetails.css';


function ProgramDetails() {

  const navigate = useNavigate();

  useEffect(() => {
   const user_session_value =  window.sessionStorage.getItem("user_name");
   if(user_session_value === null || user_session_value === ""){
    navigate("/login");
   }

  }, []);

  useEffect(() => {
    loadDegreePrograms();
   }, []);



  const [load_Degree_Programs, setLoadDegreePrograms] = useState([]);

  //  this method is used to load all the degree programs
  const loadDegreePrograms = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/getPrograms", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error("API Error");
      }
      const data = await response.json();
      setLoadDegreePrograms(data);
      console.log(data);
    } catch (error) {
      
    }
  }

  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };


  
  
  return (
    <div className="main">

      <div>
        <NavBar value={"program-details"} />
        <br /><br />
        <div className="form-program-selector">
          <h2>Please select your degree program </h2>

          <label htmlFor="degree-selector">Select your degree program: </label>
          <br /><br />
          <select name="degree" onChange={handleDropdownChange}>
            <option value="">Please select an option</option>
            {load_Degree_Programs.map((item) => (
              <option key={item.university_program_id} value={item.university_program_id}> {item.university_program_name} </option>
            ))}
          </select>

          

          <br /><br />
          <div>
            {selectedOption === '1' && 
              <div className='box'>
                <h3>BEng (Hons) Software Engineering </h3>
                <p>The BEng (Hons) Software Engineering embodies the best ways to design, implement, evaluate and maintain software systems. It makes use of many of the technical aspects of computer science, especially programming and aims to develop the professional attitudes and interpersonal and technical skills you will need in the software engineering industry.</p>
                <hr />
                <h3>Course Outline</h3>
                <p> The course covers software development process models, programming languages, technologies and tools including Object-Oriented Programming languages, OO analysis and design techniques, database designing and practice, mobile application development, web application development, security and forensics etc. BEng (Hons) software engineering Students will have the option of transferring to Level 5 of the BSc (Hons) Computer Science degree upon completion of the first year. </p>
              </div>}

            {selectedOption === '2' && 
              <div className='box'>
                <h3>BSc (Hons) Computer Science </h3>
                <p>BSc (Hons) Computer Science provides a solid foundation and training regarding the fundamentals of the computer science field, along with the opportunity to specialize in Mobile and Web Computing, Games and Computer Graphics Development or Multimedia Computing disciplines. It would provide technical knowledge to develop applications to a wide variety of end-user requirements and situations. It also aims at harnessing and developing professional attitudes and interpersonal skills that are required to work effectively, professionally and ethically within the ICT sphere.</p>
                <hr />
                <h3>Course Outline</h3>
                <p>The key aspects of this course are its flexibility and the ability for you to build a customized route within the computer science discipline. You will be able to follow recommended pathways from a range of computing areas that suit your developing interests. You will develop a wide range of skills and knowledge in areas such as systems analysis & design, mobile/web application development, game and multimedia development, user interface development and network security.</p>
              </div>}

            {selectedOption === '3' && 
              <div className='box'>
                <h3>BSc (Hons) Artificial Intelligence </h3>
                <p>The BSc (Hons) Artificial Intelligence and Data Science course is awarded by Robert Gordon University (RGU) in the UK in collaboration with the Informatics Institute of Technology (IIT) in Sri Lanka. This course is designed to address the shortage of the rising demand for a workforce with skills in artificial intelligence and data science (AI and DS), as well as to provide the opportunity for students aspiring to a career in AI and DS.</p>
                <hr />
                <h3>Course Outline</h3>
                <p> The BSc (Hons) Artificial Intelligence and Data Science course is awarded by Robert Gordon University (RGU) in the UK in collaboration with the Informatics Institute of Technology (IIT) in Sri Lanka. This course is designed to address the shortage of the rising demand for a workforce with skills in artificial intelligence and data science (AI and DS), as well as to provide the opportunity for students aspiring to a career in AI and DS. Students will be able to gain a practical understanding of contemporary AI and DS trends and technologies in developing cutting-edge solutions. Specifically, the course adopts a general to specific organization of modules; whereby initially a range of modules organized under key streams, Systems, Mathematics, Programming and AI and DS, is gradually specialized into AI and DS modules, as students progress through Stages 1 to 4. This will include modules such as Programming, Database, Web, IoT, Algorithms, Deep Learning, Machine Learning, Machine Vision, Mathematics and Statistics; where students are exposed to both theoretical principles and state-of-the-art technological advances. This will enable students to unlock the power of automation, analytics and AI, paving the way for innovation while following the course and after graduation.</p>
              </div>}
          </div>
        </div>
        <br />

        

        


          

         
         


         

      </div>
      <a href="#" class="top">&#128743;</a>


    </div>

  )
}


export default ProgramDetails;