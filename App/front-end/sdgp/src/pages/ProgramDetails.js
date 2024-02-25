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

  // const handleDropdownChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };


  
  
  return (
    <div className="main">

      <div>
        <NavBar value={"program-details"} />
        <br /><br />
        <div className="form-program-selector">
          <h2>Please select your degree program </h2>

          {/* <label htmlFor="degree-selector">Select your degree program: </label>
          <br /><br />
          <select name="degree" onChange={handleDropdownChange}>
            <option value="">Please select an option</option>
            {load_Degree_Programs.map((item) => (
              <option key={item.university_program_id} value={item.university_program_id}> {item.university_program_name} </option>
            ))} */}
          {/* </select> */}

          <div>
            <Tabs>
              <TabList className="tabs-container">
                <Tab className="tab-list">BSc(Hons) Computer Science</Tab>
                <Tab className="tab-list">BEng(Hons) Software Engineering</Tab>
                <Tab className="tab-list">Artificial Intelligence</Tab>
              </TabList>

              <TabPanel className="tab-panel">
                <div className="detail-form modules-1">
                <div className='heading'><h2>1 st year modules</h2></div><br />
                  <h3> 1. Trends in computer science</h3>
        
                  <h3> 2. Software Development I </h3>
                  
                  <h3> 3. Software Development II </h3>
                  
                  <h3>4. Mathematics for Computing </h3>
                  
                  <h3>5. Computer Systems Fundamentals </h3>
                  
                  <h3>6. Web Design and Development </h3>
                  
                </div>

                <div className="detail-form modules-2">
                  <div className='heading'><h2>2 nd year modules</h2></div><br />
                  <h2> Core Modules </h2>
                  <br />
                  <h3>1.  Object Oriented Programming</h3>
                  
                  <h3>2.  Client-Server Architectures </h3>
                  
                  <h3>3.  Software Development Group Project </h3>
                  
                  <h3>4.  Database Systems </h3>
                  <br/>
                  <h2> Optional Modules </h2>
                  <br />
                  <h3>5.  Advanced Client-Side Development </h3>
                  
                  <h3>6.  Software Engineering Principles and Practice </h3>
                  
                  <h3>7.  Mobile Application Development</h3>
                  
                  <h3>8.  Server-Side Web Development</h3>
                  
                  <h3>9.  HCI &User Experience</h3>
                  
                  <h3>10. 3D Interactive Media Development </h3>
                  
                  <h3>11. XR & Multimodal Interaction </h3>
                  
                  <h3>12. Information Technology Security </h3>
                  
                  <h3>13. Algorithms: Theory, Design, and Implementation </h3>
                  
                  <h3>14. Machine Learning and Data Mining </h3>
                  
                  <h3>15. Game Engine Architecture </h3>
                  
                  <h3>16. Math’s and Physics for Games </h3>
                  
                  <h3>17. XR Multimodal Interaction </h3>
                 
                  <h3>18. Robotics Principles </h3>
                  
                  <h3>19. Sensors & Interfaces </h3>
                  
                </div>

                {/* <div className="detail-form modules-3">
                  <label for="degree-selector"> <h2>3 rd year modules</h2> </label><br />
                  <h3> 1. Computer Networks</h3>
                  <p>This module provides students with a foundational understanding of the fundamental concepts and technologies that form the backbone of our interconnected world. Its components encompass key areas such as Network Architectures, Networking Protocols, Networking Devices, and Network Applications. Delving into these sub-parts enhances our comprehension of the intricate workings of the internet and the diverse ways in which various technologies can seamlessly collaborate. The practical applications of Computer Networks extend across a spectrum of fields, including software development, cybersecurity, game development, and beyond.
                  </p>
                  <br />
                  <h3> 2. Operating Systems</h3>
                  <p>Delving into the realm of Operating Systems not only imparts a foundational comprehension of computer functionality but also empowers individuals to construct resilient applications, oversee intricate systems, and navigate the continually interconnected landscape of technology. This knowledge finds practical applications in diverse areas such as Process Management, Security and Protection, User Interfaces, Networking, and Communication.
                  </p>
                  <br />
                  <h3> 3. Computational Theory</h3>
                  <p>It serves as the cornerstone for crafting efficient algorithms, architecting secure systems, and gaining insights into the boundaries of artificial intelligence. Computational Theory stands as a captivating module that explores the fundamental nature of computer capabilities and limitations. Within this subject, one can delve into aspects such as Models of Computation, Computability Theory, and Complexity Theory.</p>
                  <br />
                  <h3>4. Wireless Technologies and Network Programming</h3>
                  <p> This module immerses students in the captivating realm of wireless data transmission, liberating us from the limitations of physical cables. It investigates the cutting-edge technologies that underpin our seamless connectivity in the wireless era. Participants will delve into the characteristics of microwaves, radio waves, and infrared radiation, gaining insight into the diverse landscape of contemporary wireless technologies.</p>
                  <br />
                  <h3>5. Algorithms and Complexity</h3>
                  <p> Within this module, algorithms take center stage as they address problems through systematic, step-by-step instructions. Furthermore, the module equips us with essential tools to execute these algorithms efficiently. Complexity Theory is employed to quantify the time and memory requirements of an algorithm, providing insights into its efficiency in completing tasks. By delving into this module, users gain the foundational knowledge necessary for computation, empowering them to shape digital landscapes.</p>
                  <br />
                </div> */}
                <div className="detail-form modules-3">
                  <div className='heading'><h2>3 rd year modules</h2></div><br />
                  <h2>Industrial Placment</h2>
                  <p>A 12 month placement period is compulsory between years 2 and 4. 
                    This experience will give you additional practical skills and a 
                    competitive edge in the job market.This mandatory placement will not only 
                    empower a student with a degree but also with the necessary work experience. 
                    With this added advantage, IIT students have a 100% employment assurance and 
                    are most often selected for high income employment at renowned organisations.</p>
                  <br/>  
                </div>

                <div className='detail-form modules-4'>
                  <div className='heading'><h2>4 th year modules </h2></div>  
                  <h2> Core Modules </h2>
                  <br />
                  <h3>1. Final Year Project </h3>
                  <p> The module allows students to demonstrate in applied, written
                      and oral forms the effective use of competences required to
                      achieve the degree of study. It requires students to combine
                      previously acquired knowledge and techniques, with new
                      knowledge/ideas gained from investigation and research and
                      produce an extended piece of work related to their degree of
                      study. It involves the conceptualization, design,
                      implementation, and evaluation of a substantial piece of
                      software, process, model, or experimental study. </p>
                      <br />

                  <h3>2. Applied AI</h3>   
                  
                  <h3>3. Cyber Security</h3>   
                  <br/>
                  <h2> Optional Modules </h2>
                  <br />
                  <h3>4. Mobile Native Application Development</h3>   
                  
                  <h3>5. Advanced Server-Side Web Development</h3>   
                  
                  <h3>6. Usability Testing and Evaluation</h3>   
                  
                  <h3>7. Advanced Interactive Media Development</h3>   
                  
                  <h3>8. Digital Marketing, Social Media, and Web Analytics</h3>   
                 
                  <h3>9. Strategic Management of Information Systems</h3>   
                  
                  <h3>10. Information Driven Entrepreneurship and Enterprise</h3>   
                  
                  <h3>11. Operational Research and Optimization</h3>   
                  
                  <h3>12. Data Visualization and Dashboarding</h3>   
                  
                  <h3>13. Game AI </h3>   
                  
                  <h3>14. Applied Robotics</h3>   
                  
                </div>

              </TabPanel>

              <TabPanel className="tab-panel">
              <div className="detail-form modules-1">
                <div className='heading'><h2>1 st year modules</h2></div><br />
                  <h3> 1. Trends in computer science</h3>
                  
                  <h3> 2. Software Development I </h3>
                  
                  <h3> 3. Software Development II </h3>
                  
                  <h3>4. Mathematics for Computing </h3>
                  
                  <h3>5. Computer Systems Fundamentals </h3>
                  
                  <h3>6. Web Design and Development </h3>
                  
                </div>

                <div className="detail-form modules-2">
                <div className='heading'> <h2>2 nd year modules</h2></div><br />
                  <h2> Core Modules </h2>
                  <br />
                  <h3> 1. Object Oriented Programming</h3>
                  
                  <h3> 2. Client-Server Architectures </h3>
                  
                  <h3> 3. Software Development Group Project </h3>
                  
                  <h3>4. Database Systems </h3>
                  
                  <h2> Optional Modules </h2>
                  <br />
                  <h3>5. Advanced Client-Side Development </h3>
                  
                  <h3>6. Software Engineering Principles and Practice </h3>
                  
                  <h3>7. Mobile Application Development</h3>
                  
                  <h3>8. Server-Side Web Development</h3>
                  
                  <h3>9. HCI &User Experience</h3>
                  
                  <h3>10. 3D Interactive Media Development </h3>
                  
                  <h3>11. XR & Multimodal Interaction </h3>
                  
                  <h3>12. Information Technology Security </h3>
                  
                  <h3>13. Algorithms: Theory, Design, and Implementation </h3>
                  
                  <h3>14. Machine Learning and Data Mining </h3>
                  
                  <h3>15. Game Engine Architecture </h3>
                  
                  <h3>16. Math’s and Physics for Games </h3>
                  
                  <h3>17. XR Multimodal Interaction </h3>
                  
                  <h3>18. Robotics Principles </h3>
                  
                  <h3>19. Sensors & Interfaces </h3>
                  
                </div>

                <div className="detail-form modules-3">
                <div className='heading'> <h2>3 rd year modules</h2></div><br />
                  <h2>Industrial Placment</h2>
                  <p>A 12 month placement period is compulsory between years 2 and 4. 
                    This experience will give you additional practical skills and a 
                    competitive edge in the job market.This mandatory placement will not only 
                    empower a student with a degree but also with the necessary work experience. 
                    With this added advantage, IIT students have a 100% employment assurance and 
                    are most often selected for high income employment at renowned organisations.</p>
                  <br/>  
                </div>

                <div className='detail-form modules-4'>
                <div className='heading'> <h2>4 th year modules</h2></div><br/>
                  <h2> Core Modules </h2>
                  <h3>1. Final Year Project </h3>
                  <p> The module allows students to demonstrate in applied, written
                      and oral forms the effective use of competences required to
                      achieve the degree of study. It requires students to combine
                      previously acquired knowledge and techniques, with new
                      knowledge/ideas gained from investigation and research and
                      produce an extended piece of work related to their degree of
                      study. It involves the conceptualization, design,
                      implementation, and evaluation of a substantial piece of
                      software, process, model, or experimental study. </p>
                      <br />

                  <h3>2. Concurent Programming</h3>   
                  
                  <h3>3. Cyber Security</h3>   
                  
                  <h3>4. Formal Methods</h3>

                  <br />
                  <h2> Optional Modules </h2>
                  <br />
                  <h3>5. Mobile Native Application Development</h3>   
                  
                  <h3>6. Advanced Server-Side Web Development</h3>   
                  
                  <h3>7. Usability Testing and Evaluation</h3>   
                  
                  <h3>8. Advanced Interactive Media Development</h3>   
                 
                  <h3>9. Digital Marketing, Social Media, and Web Analytics</h3>   
                  
                  <h3>10. Strategic Management of Information Systems</h3>   
                  
                  <h3>11. Information Driven Entrepreneurship and Enterprise</h3>   
                  
                  <h3>12. Operational Research and Optimization</h3>   
                  
                  <h3>13. Data Visualization and Dashboarding</h3>   
                  
                  <h3>14. Game AI </h3>   
                  
                  <h3>15. Applied Robotics</h3>   
                  
                </div>

              </TabPanel>
              
              <TabPanel>
              <div className="detail-form modules-1">
                <div className='heading'> <h2>1 st year modules</h2></div><br />
                  <h2> Core Modules </h2>
                  <br />
                  <h3> 1. Computer Systems Fundamentals </h3>
                  
                  <h3> 2. Database Systems </h3>
                  
                  <h3> 3. Computational Mathematics </h3>
                  
                  <h3> 4. Data Structures And Algorithms For Artificial Intelligence  </h3>

                  <h3> 5. Web Technology </h3>

                  <h3> 6. Programming Fundamentals </h3>

                  <h3> 7. English Communication Skills </h3>
                  
                </div>

                <div className="detail-form modules-2">
                <div className='heading'> <h2>2 nd year modules</h2></div><br />
                  <h2> Core Modules </h2>
                  <br />
                  <h3> 1. Artificial Intelligence </h3>
                  
                  <h3> 2. Simulation and Modelling Techniques </h3>
                  
                  <h3> 3. Object Oriented Development </h3>
                  
                  <h3> 4. Advanced Mathematics for Data Science  </h3>

                  <h3> 5. Data Engineering </h3>

                  <h3> 6. Data Science Group Project </h3>

                  <h3> 7. Machine Learning </h3>
                  
                </div>

                <div className="detail-form modules-3">
                <div className='heading'> <h2>3 rd year modules</h2></div><br />
                  <h2> Core Modules </h2>
                  <br />
                  <h3> 1. Deep Learning </h3>
                  <br />
                  <h2> 1. Internet of Things and Wearables </h2>
                  
                  <h3> 2. Edge Artificial Intelligence </h3>

                  <br />
                  <h2>Industrial Placment</h2>
                  <p>A 12 month placement period is compulsory between years 2 and 4. 
                    This experience will give you additional practical skills and a 
                    competitive edge in the job market.This mandatory placement will not only 
                    empower a student with a degree but also with the necessary work experience. 
                    With this added advantage, IIT students have a 100% employment assurance and 
                    are most often selected for high income employment at renowned organisations.</p>
                  <br />  
                </div>

                <div className="detail-form modules-2">
                <div className='heading'> <h2>4 th year modules</h2></div><br />
                  <h2> Core Modules </h2>
                  <br />
                  <h3> 1. Individual Research Project </h3>

                  <h3> 2. Computational Intelligence </h3>
                  
                  <h3> 3. Research Trends </h3><br/>
                  
              
                  <h2>Optional Modules</h2><br/>  
                  <h3> 4. Machine Vision </h3>
                  
                  <h3> 5. Language Processing and Information Retrieval  </h3>
                </div>
              </TabPanel>
            </Tabs>
          </div>

          <br /><br />
          {/* <div>
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
          </div> */}
        </div>
        <br />

        

        


          

         
         


         

      </div>
      <a href="#" class="top">&#128743;</a>


    </div>

  )
}


export default ProgramDetails;