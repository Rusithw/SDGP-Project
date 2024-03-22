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
          <h2 className='head2'>Please select your degree program... </h2>
          <label htmlFor="degree-selector">Select your degree program: </label>
          <br /><br />
          <select name="degree" onChange={handleDropdownChange}>
            <option value="">Please select an option</option>
            {load_Degree_Programs.map((item) => (
              <option key={item.university_program_id} value={item.university_program_id}> {item.university_program_name} </option>
            ))}
          </select>
         

          <br /><br />
          <Tabs>
            <TabList>
              <Tab>BEng (Hons) Software Engineering</Tab>
              <Tab>BSc (Hons) Computer Science</Tab>
              <Tab>BSc (Hons) Artificial Intelligence</Tab>
              <Tab>Medicine</Tab>
              <Tab>Business Administration</Tab>
              <Tab>Psychology</Tab>
              <Tab>Engineering</Tab>
            </TabList>

            <TabPanel>
            <div className='box'>
                <h3>BEng (Hons) Software Engineering </h3>
                <p>The BEng (Hons) Software Engineering embodies the best ways to design, implement, evaluate and maintain software systems. It makes use of many of the technical aspects of computer science, especially programming and aims to develop the professional attitudes and interpersonal and technical skills you will need in the software engineering industry.</p>
                <hr />
                <h3>Course Outline</h3>
                <p> The course covers software development process models, programming languages, technologies and tools including Object-Oriented Programming languages, OO analysis and design techniques, database designing and practice, mobile application development, web application development, security and forensics etc. BEng (Hons) software engineering Students will have the option of transferring to Level 5 of the BSc (Hons) Computer Science degree upon completion of the first year. </p>
              </div>
            </TabPanel>
            
            <TabPanel>
            <div className='box'>
                <h3>BSc (Hons) Computer Science </h3>
                <p>BSc (Hons) Computer Science provides a solid foundation and training regarding the fundamentals of the computer science field, along with the opportunity to specialize in Mobile and Web Computing, Games and Computer Graphics Development or Multimedia Computing disciplines. It would provide technical knowledge to develop applications to a wide variety of end-user requirements and situations. It also aims at harnessing and developing professional attitudes and interpersonal skills that are required to work effectively, professionally and ethically within the ICT sphere.</p>
                <hr />
                <h3>Course Outline</h3>
                <p>The key aspects of this course are its flexibility and the ability for you to build a customized route within the computer science discipline. You will be able to follow recommended pathways from a range of computing areas that suit your developing interests. You will develop a wide range of skills and knowledge in areas such as systems analysis & design, mobile/web application development, game and multimedia development, user interface development and network security.</p>
              </div> 
            </TabPanel>

            <TabPanel>
            <div className='box'>
                <h3>BSc (Hons) Artificial Intelligence </h3>
                <p>The BSc (Hons) Artificial Intelligence and Data Science course is awarded by Robert Gordon University (RGU) in the UK in collaboration with the Informatics Institute of Technology (IIT) in Sri Lanka. This course is designed to address the shortage of the rising demand for a workforce with skills in artificial intelligence and data science (AI and DS), as well as to provide the opportunity for students aspiring to a career in AI and DS.</p>
                <hr />
                <h3>Course Outline</h3>
                <p> The BSc (Hons) Artificial Intelligence and Data Science course is awarded by Robert Gordon University (RGU) in the UK in collaboration with the Informatics Institute of Technology (IIT) in Sri Lanka. This course is designed to address the shortage of the rising demand for a workforce with skills in artificial intelligence and data science (AI and DS), as well as to provide the opportunity for students aspiring to a career in AI and DS. Students will be able to gain a practical understanding of contemporary AI and DS trends and technologies in developing cutting-edge solutions. Specifically, the course adopts a general to specific organization of modules; whereby initially a range of modules organized under key streams, Systems, Mathematics, Programming and AI and DS, is gradually specialized into AI and DS modules, as students progress through Stages 1 to 4. This will include modules such as Programming, Database, Web, IoT, Algorithms, Deep Learning, Machine Learning, Machine Vision, Mathematics and Statistics; where students are exposed to both theoretical principles and state-of-the-art technological advances. This will enable students to unlock the power of automation, analytics and AI, paving the way for innovation while following the course and after graduation.</p>
              </div> 
            </TabPanel>

            <TabPanel>
            <div className='box'>
                <h3>MEDICINE</h3>
                <p>The Medicine program is designed to equip students with the knowledge, skills, and professional attitudes necessary to excel in the field of medicine. By focusing on medical sciences, clinical practice, and patient care, Medicine prepares students to become competent and empathetic medical professionals.</p>
                <hr />
                <h3>Course Outline</h3>
                <p>The Medicine program offers a comprehensive exploration of medical science, clinical practice, and healthcare systems. Students study anatomy, physiology, pharmacology, pathology, and medical ethics while engaging in hands-on clinical experiences and hospital rotations. Emphasis is placed on evidence-based medicine, interdisciplinary collaboration, and communication skills. Elective courses and research projects allow students to delve into specialized areas of medicine, and upon completion of the first year, students may have the option to transfer to Level 5 of other relevant medical degrees, providing flexibility in their educational path.</p>
              </div> 
            </TabPanel>

            <TabPanel>
            <div className='box'>
                <h3>BUSINESS ADMINISTRATION</h3>
                <p>The Business Administration program equips students with essential knowledge and skills for effectively managing various aspects of business operations, including finance, marketing, human resources, and strategic planning. Combining theoretical foundations with practical applications, this degree fosters critical thinking and decision-making abilities necessary to thrive in dynamic business environments.</p>
                <hr />
                <h3>Course Outline</h3>
                <p>This course covers a wide range of subjects essential for understanding the intricacies of modern business operations and management practices. Students will explore topics such as organizational behavior, strategic management, marketing principles, financial analysis, human resource management, operations management, and entrepreneurship. Additionally, the curriculum includes modules on business ethics, international business, information technology in business, and data analysis. Throughout the program, students will engage in case studies, projects, and practical exercises to apply theoretical concepts to real-world business scenarios.</p>
              </div> 
            </TabPanel>

            <TabPanel>
            <div className='box'>
                <h3>PSYCHOLOGY</h3>
                <p>The BSc (Hons) Psychology program explores the intricacies of human behavior, cognition, and emotions, utilizing empirical research methods and theoretical frameworks to analyze and understand psychological phenomena. It fosters critical thinking, research skills, and ethical considerations, preparing students for diverse career paths in psychology while emphasizing professional development and interpersonal communication essential in the field.</p>
                <hr />
                <h3>Course Outline</h3>
                <p>  Students delve into various subfields including cognitive psychology, developmental psychology, social psychology, clinical psychology, and more. The curriculum covers fundamental theories, research methodologies, and practical applications in understanding human behavior and mental processes. Topics include psychological assessment, neuroscience, abnormal psychology, and counseling techniques. Additionally, students gain valuable skills in statistical analysis, experimental design, and critical thinking, which are essential for conducting empirical research in psychology.</p>
              </div>
            </TabPanel>

            <TabPanel>
            <div className='box'>
                <h3> ENGINEERING </h3>
                <p>The BSc (Hons) Engineering program integrates foundational principles and advanced techniques to analyze, design, construct, and innovate various engineering systems across multiple disciplines. It emphasizes hands-on learning, problem-solving, and the development of critical thinking and communication skills necessary to excel in diverse engineering fields, fostering professionals ready to tackle real-world challenges in today's rapidly evolving technological landscape.</p>
                <hr />
                <h3>Course Outline</h3>
                <p>  Students delve into foundational subjects such as mathematics, physics, and materials science, providing a solid understanding of engineering fundamentals. As they progress through the program, they explore specialized areas including mechanical, electrical, civil, and chemical engineering, allowing them to develop expertise in their chosen field. The curriculum encompasses a wide range of topics, including but not limited to: mechanical engineering, electrical engineering, civil engineering, and chemical engineering. Students also have the opportunity to engage in interdisciplinary projects and gain hands-on experience through laboratory work, design projects, and industrial placements. The program emphasizes practical problem-solving skills, teamwork, and innovation, preparing graduates for diverse career opportunities in the engineering industry or further academic pursuits. </p>
              </div>
            </TabPanel>

          </Tabs>
            
          {/* <div>
            {selectedOption === '5' &&
              <div className='box'>
                <h3>BEng (Hons) Software Engineering </h3>
                <p>The BEng (Hons) Software Engineering embodies the best ways to design, implement, evaluate and maintain software systems. It makes use of many of the technical aspects of computer science, especially programming and aims to develop the professional attitudes and interpersonal and technical skills you will need in the software engineering industry.</p>
                <hr />
                <h3>Course Outline</h3>
                <p> The course covers software development process models, programming languages, technologies and tools including Object-Oriented Programming languages, OO analysis and design techniques, database designing and practice, mobile application development, web application development, security and forensics etc. BEng (Hons) software engineering Students will have the option of transferring to Level 5 of the BSc (Hons) Computer Science degree upon completion of the first year. </p>
              </div>}
            {selectedOption === '6' &&
              <div className='box'>
                <h3>BSc (Hons) Computer Science </h3>
                <p>BSc (Hons) Computer Science provides a solid foundation and training regarding the fundamentals of the computer science field, along with the opportunity to specialize in Mobile and Web Computing, Games and Computer Graphics Development or Multimedia Computing disciplines. It would provide technical knowledge to develop applications to a wide variety of end-user requirements and situations. It also aims at harnessing and developing professional attitudes and interpersonal skills that are required to work effectively, professionally and ethically within the ICT sphere.</p>
                <hr />
                <h3>Course Outline</h3>
                <p>The key aspects of this course are its flexibility and the ability for you to build a customized route within the computer science discipline. You will be able to follow recommended pathways from a range of computing areas that suit your developing interests. You will develop a wide range of skills and knowledge in areas such as systems analysis & design, mobile/web application development, game and multimedia development, user interface development and network security.</p>
              </div>}
            {selectedOption === '7' &&
              <div className='box'>
                <h3>BSc (Hons) Artificial Intelligence </h3>
                <p>The BSc (Hons) Artificial Intelligence and Data Science course is awarded by Robert Gordon University (RGU) in the UK in collaboration with the Informatics Institute of Technology (IIT) in Sri Lanka. This course is designed to address the shortage of the rising demand for a workforce with skills in artificial intelligence and data science (AI and DS), as well as to provide the opportunity for students aspiring to a career in AI and DS.</p>
                <hr />
                <h3>Course Outline</h3>
                <p> The BSc (Hons) Artificial Intelligence and Data Science course is awarded by Robert Gordon University (RGU) in the UK in collaboration with the Informatics Institute of Technology (IIT) in Sri Lanka. This course is designed to address the shortage of the rising demand for a workforce with skills in artificial intelligence and data science (AI and DS), as well as to provide the opportunity for students aspiring to a career in AI and DS. Students will be able to gain a practical understanding of contemporary AI and DS trends and technologies in developing cutting-edge solutions. Specifically, the course adopts a general to specific organization of modules; whereby initially a range of modules organized under key streams, Systems, Mathematics, Programming and AI and DS, is gradually specialized into AI and DS modules, as students progress through Stages 1 to 4. This will include modules such as Programming, Database, Web, IoT, Algorithms, Deep Learning, Machine Learning, Machine Vision, Mathematics and Statistics; where students are exposed to both theoretical principles and state-of-the-art technological advances. This will enable students to unlock the power of automation, analytics and AI, paving the way for innovation while following the course and after graduation.</p>
              </div>}
              {selectedOption === '8' &&
              <div className='box'>
                <h3>Medicine</h3>
                <p>The Medicine program is designed to equip students with the knowledge, skills, and professional attitudes necessary to excel in the field of medicine. By focusing on medical sciences, clinical practice, and patient care, Medicine prepares students to become competent and empathetic medical professionals.</p>
                <hr />
                <h3>Course Outline</h3>
                <p>The Medicine program offers a comprehensive exploration of medical science, clinical practice, and healthcare systems. Students study anatomy, physiology, pharmacology, pathology, and medical ethics while engaging in hands-on clinical experiences and hospital rotations. Emphasis is placed on evidence-based medicine, interdisciplinary collaboration, and communication skills. Elective courses and research projects allow students to delve into specialized areas of medicine, and upon completion of the first year, students may have the option to transfer to Level 5 of other relevant medical degrees, providing flexibility in their educational path.</p>
              </div>}
              {selectedOption === '9' &&
              <div className='box'>
                <h3>BUSINESS ADMINISTRATION</h3>
                <p>The Business Administration program equips students with essential knowledge and skills for effectively managing various aspects of business operations, including finance, marketing, human resources, and strategic planning. Combining theoretical foundations with practical applications, this degree fosters critical thinking and decision-making abilities necessary to thrive in dynamic business environments.</p>
                <hr />
                <h3>Course Outline</h3>
                <p>This course covers a wide range of subjects essential for understanding the intricacies of modern business operations and management practices. Students will explore topics such as organizational behavior, strategic management, marketing principles, financial analysis, human resource management, operations management, and entrepreneurship. Additionally, the curriculum includes modules on business ethics, international business, information technology in business, and data analysis. Throughout the program, students will engage in case studies, projects, and practical exercises to apply theoretical concepts to real-world business scenarios.</p>
              </div>}
              {selectedOption === '10' &&
              <div className='box'>
                <h3>PSYCHOLOGY</h3>
                <p>The BSc (Hons) Psychology program explores the intricacies of human behavior, cognition, and emotions, utilizing empirical research methods and theoretical frameworks to analyze and understand psychological phenomena. It fosters critical thinking, research skills, and ethical considerations, preparing students for diverse career paths in psychology while emphasizing professional development and interpersonal communication essential in the field.</p>
                <hr />
                <h3>Course Outline</h3>
                <p>  Students delve into various subfields including cognitive psychology, developmental psychology, social psychology, clinical psychology, and more. The curriculum covers fundamental theories, research methodologies, and practical applications in understanding human behavior and mental processes. Topics include psychological assessment, neuroscience, abnormal psychology, and counseling techniques. Additionally, students gain valuable skills in statistical analysis, experimental design, and critical thinking, which are essential for conducting empirical research in psychology.</p>
              </div>}
              {selectedOption === '11' &&
              <div className='box'>
                <h3> ENGINEERING </h3>
                <p>The BSc (Hons) Engineering program integrates foundational principles and advanced techniques to analyze, design, construct, and innovate various engineering systems across multiple disciplines. It emphasizes hands-on learning, problem-solving, and the development of critical thinking and communication skills necessary to excel in diverse engineering fields, fostering professionals ready to tackle real-world challenges in today's rapidly evolving technological landscape.</p>
                <hr />
                <h3>Course Outline</h3>
                <p>  Students delve into foundational subjects such as mathematics, physics, and materials science, providing a solid understanding of engineering fundamentals. As they progress through the program, they explore specialized areas including mechanical, electrical, civil, and chemical engineering, allowing them to develop expertise in their chosen field. The curriculum encompasses a wide range of topics, including but not limited to: mechanical engineering, electrical engineering, civil engineering, and chemical engineering. Students also have the opportunity to engage in interdisciplinary projects and gain hands-on experience through laboratory work, design projects, and industrial placements. The program emphasizes practical problem-solving skills, teamwork, and innovation, preparing graduates for diverse career opportunities in the engineering industry or further academic pursuits. </p>
              </div>}
          </div> */}
        </div>
        <br />

        <div className="detail-form modules-1">
          <label for="degree-selector"> <h2>1 st year modules</h2> </label><hr /><br />
          <h3> 1. Trends in computer science</h3>
          <p>This module focuses on trends in Computer Science which currently attract considerable industry and academic interest. It allows the students to acquire research skills which will prepare them for the group and final year project and will support their employability prospects. At the same time, it introduces key aspects of working as a professional in the world of computing, including consideration of ethics, privacy, data protection and confidentiality, and how these are incorporated into professional codes of practice such as the BCS Code of Conduct.
          </p>
          <br />
          <h3> 2. Software Development I </h3>
          <p>An introduction to computer programming in a high-level programming language: Python. The module concentrates on teaching the fundamentals of programming and algorithm design. Basic coding structures such as sequence, selection, and iteration will be covered. There will be an emphasis on practical exercises to develop programming experience and confidence.
          </p>
          <br />
          <h3> 3. Software Development II </h3>
          <p>The module aims to develop skills in the selection and implementation of problem-solving algorithms while learning the Java programming language. It will strengthen abilities in the implementation of algorithms, in terms of adherence to requirements, design and modelling, through to the application of sound programming principles. The understanding of structures and advanced programming methods will also be developed, including sorting, the implementation of classes and methods, as well as more sophisticated data structures such as lists, queues, and stacks.</p>
          <br />
          <h3>4. Mathematics for Computing </h3>
          <p> This module introduces the underpinning mathematical processes and concepts used in your course. The syllabus comprises topics such as data structures, data analysis and their mathematical representation, logical foundations of a computer program, algorithmic and probabilistic reasoning, and elements of linear algebra. The approach taken is hands on. Learning the mathematical foundations of computing you apply this knowledge to a variety of problems that relate to your course and subsequent modules you will be taking. </p>
          <br />
          <h3>5. Computer Systems Fundamentals </h3>
          <p> This module is centered on the fundamental aspects of the way that a typical computer functions either as a standalone entity or as part of a computer network. Discussion of the main hardware components of a computer system provides the backdrop to introduce the Von Neumann fetch–decode–execute cycle as well as the way in which data and information are stored in the computer. Students will learn about the various number systems (denary, binary, and hexadecimal) that are utilized in computer systems. Progressing from the hardware level, students are introduced to the lowest programming level that humans can understand in the form of assembly programming. Above the assembly layer, there is the operating system layer. Students will be able to apply their knowledge of Binary number conversions and Logical Operations to perform Networking Calculations.  </p>
          <br />
          <h3>6. Web Design and Development </h3>
          <p> This module introduces web technologies and covers theoretical and practical concepts of web development. It covers a variety of commonly used Internet programming languages. Students will gain practical experience of Web page development and will be expected to write programs and Web pages conforming to given guidelines.  </p>
          <br />
          <h3>7. Anatomy </h3>
          <p> The module "Anatomy" in the field of Medicine focuses on the study of the structure and organization of the human body. It delves into the intricate details of organs, tissues, bones, muscles, and other anatomical components, emphasizing their functions and relationships within the body. Students learn through a combination of lectures, dissections, practical sessions, and anatomical models, preparing them for clinical practice and further specialization within various medical disciplines.  </p>
          <br />
          <h3>8. Accounting </h3>
          <p> The Accounting module in the Business Administration course provides students with fundamental knowledge and skills in financial record-keeping, analysis, and reporting essential for effective business management. It covers topics such as principles of accounting, financial statement preparation, budgeting, taxation, and auditing. Through this module, students learn to interpret financial data, make informed business decisions, and communicate financial information effectively within an organizational context.  </p>
          <br />
          <h3>9. Developmental Psychology </h3>
          <p> The Developmental Psychology module in a Psychology course explores the psychological growth and changes that occur across the lifespan, from infancy to old age. Topics may include prenatal development, infancy, childhood, adolescence, adulthood, and aging. Students typically examine key milestones, developmental tasks, and the influence of genetics, environment, culture, and individual differences on development. This module aims to provide insights into understanding human development and its implications for behavior, cognition, and well-being across the lifespan.  </p>
          <br />
          <h3>10. Mechanical Engineering </h3>
          <p> The Mechanical Engineering module in an Engineering course typically covers fundamental principles and advanced concepts in the field of mechanical engineering. It introduces students to topics such as mechanics, thermodynamics, fluid dynamics, materials science, and manufacturing processes. Students learn how to apply engineering principles to design, analyze, and optimize mechanical systems and components, including machinery, engines, vehicles, and structures. The module often includes theoretical knowledge alongside practical applications through laboratory experiments, projects, and case studies.  </p>
          <br />

        </div>

        <div className="detail-form modules-2">
          <label for="degree-selector"> <h2>2 nd year modules</h2> </label><hr /><br />
          <h2> Core Modules </h2>
          <h3> 1. Object Oriented Programming</h3>
          <p>This module will teach the fundamental ideas behind the object-oriented approach to programming. It will provide students with knowledge and practical experience in writing computer programs using object-oriented programming techniques. It will cover in a practical way the design and implementation of object-oriented software for software applications through the entire software development lifecycle.
          </p>
          <br />
          <h3> 2. Client-Server Architectures </h3>
          <p>This module introduces the concepts of the Client/Server and, more generally, Distributed Architecture that are at the base of systems where the constituting services can be virtualized, replicated, and moved. The module explains two fundamental theoretical concepts: the implications of the transition from a single to a distributed execution space and that of digital transmission of data. The module also covers the fundamental aspects of data transmission. The Client/Server Paradigm is analyzed in detail both as a simple example of a Distributed System and as a possible building block of more complex Distributed Architectures. The module also covers three main technologies used for implementation: sockets and Web Services (both SOAP and REST).
          </p>
          <br />
          <h3> 3. Software Development Group Project </h3>
          <p>In this module students gain practical work experience through their participation in a team that develops a prototype for a real-life software application suggested by industry contacts. The module takes the students through the different managerial and technical steps of software development. Students gain experience in managing a team and deliver software iteratively by using an agile approach and receiving feedback from industry contacts. The module also provides students with experience in team communication and ways to overcome any problems, as well as the opportunity to reflect on professional issues such as quality of project documentation, cybersecurity, ethics and code of conduct.</p>
          <br />
          <h3>4. Database Systems </h3>
          <p>This module provides solid knowledge and skills in database systems, SQL and XML. It covers the logical design of a relational schema. It also covers the implementation of the database in a major DBMS and the manipulation of the data using SQL. Subsequently, it considers the transformation and rendering of XML documents using XSLT and the extraction of elements from XML documents using XPath and XQuery. Finally, it explores issues related to NoSQL databases and XML databases. </p>
          <br />
          <h2> Optional Modules </h2>
          <h3>5. Advanced Client-Side Development </h3>
          <p> This module provides practical knowledge and understanding of client-side or/else front end development programming using advanced HTML5, CSS3 and JavaScript. Client-side technologies, including HTML5 Audio and Video are covered together with a client-side scripting language, a UI and CSS framework and a client-side scripting framework. The module also covers issues pertaining to front-end security.  </p>
          <br />
          <h3>6. Software Engineering Principles and Practice </h3>
          <p> This module focuses on equipping students with essential skills in software engineering and development. Students will learn to analyze system problem domains and formulate high-level sustainable design solutions using sound principles and practices. The critical evaluation of alternative development methodologies and the selection of appropriate life cycles for given proposals are emphasized. The effective application of tools and techniques throughout the development cycle, along with the creation, organization, and concise communication of well-structured and documented solutions to ensure maintainability and reusability, are key objectives. Additionally, the module aims to cultivate a critical understanding of software quality metrics and the demonstration of professional responsibility in the global context of software engineering solutions. Topics include software systems architecture, developmental methodologies, requirements engineering, design principles, practical aspects of abstractions, sustainable software systems, software quality metrics, and software testing. The syllabus covers software frameworks, architectures, object-oriented programming, standard modeling languages, modern operating systems, and professional responsibilities in software development. </p>
          <br />
          <h3>7. Mobile Application Development</h3>
          <p> The module is an introduction to software development on mobile devices such as mobile phones, tablets, and wearables. It concentrates on the Android platform. The main contents include: The Android mobile programming architecture. Restrictions on using small devices such as mobile phones tablets and wearables. Programming user interfaces, networking, persistent storage, and multi-threading. Device profiling, application deployment and installation.  </p>
          <br />
          <h3>8. Server-Side Web Development</h3>
          <p> This module covers the design and implementation of commercial dynamic web applications from a server-side programming and database perspective. It is suitable for students with a strong interest in SQL, web programming, HTML, CSS, and browser scripting. A server-side language is covered to the depth required for implementing high-quality fully functional web- enabled database applications that fittingly support an organization’s business processes.</p>
          <br />
          <h3>9. HCI &User Experience</h3>
          <p> The module introduces students to the theoretical aspects of Human Computer Interaction (HCI) and User Experience (UX) as well as provides a practical understanding of current principles of effective interface design. The module equips students with the practical skills needed for the design and evaluation of interactive systems using a user-centered approach. It provides an understanding of the relevance and application of human abilities and limitations to the design of interactive systems and how context influences human system interaction.</p>
          <h3>10. 3D Interactive Media Development </h3>
          <p> This module introduces students to concepts of 3D user interfaces for interactive media. It covers essential topics including 3D modelling principles, methods and techniques, complex object creation, deformation and transformations, texture mapping, color, and lighting. It uses an industry standard games engine to demonstrate 3D animation concepts, properties, controllers, and scripting to create interactive media content. This is part of the “Usability and Interaction” and “Games and Computer Graphics Development” themes for Computer Science but is open to all courses with no prerequisite. Supported coursework path is the production of an interactive rich media product.  </p>
          <br />
          <h3>11. XR & Multimodal Interaction </h3>
          <p> This module introduces students to concepts of XR (Virtual, Augmented, and Mixed Reality) interaction, and uses an industry standard games engine to develop assets, properties, controllers, and scripting for creating interactive rich media content. This is part of the “Usability and Interaction” and “Games and Computer Graphics development “themes for Computer Science but is open to all courses with no prerequisite. Supported coursework path is the production of a VR interactive media product.  </p>
          <br />
          <h3>12. Information Technology Security </h3>
          <p> This module examines the issues involved with recognizing security threats to computer systems, their consequences, and methods of dealing with such threats. It provides an overview of access controls, software development security, business continuity, legal issues and compliance, and physical security. </p>
          <br />
          <h3>13. Algorithms: Theory, Design, and Implementation </h3>
          <p> Algorithms are among the fundamentals of computer science and software engineering and at the heart of artificial intelligence, machine learning, data science and their applications to real world problem solving in digital humanities, economics, biosciences, social sciences, etc. The module introduces the students into the theory and practice of algorithmic strategies, development, and implementation. Hence, the module equips the students with a road map of mappings between real world problems and suitable algorithmic approaches for their solutions. The latter is crucial for the students’ professional life as problem solvers and thinkers in IT industry, society, and humanity. </p>
          <br />
          <h3>14. Machine Learning and Data Mining </h3>
          <p> This module provides an understanding and hands-on experience in the fields of machine learning and data mining, covering the full life cycle from preparing data to validating and optimizing the learned model. The module covers different algorithms and approaches to machine learning and data mining, and the issues of using them on data sets of different sizes and complexity. </p>
          <br />
          <h3>15. Game Engine Architecture </h3>
          <p> This module introduces students to modern game engine architecture and technologies. The conceptual architecture framework and the subsystem integration including the low-level foundation systems, the rendering engine, game asset management, the physics simulation, event-based gameplay system will be critically accessed. Students will gain the theory underlying the various subsystems that comprise a commercial game engine and the data structures and essential algorithms and develop practical skills that are typically used to implement a 3D game prototype using industry game engines. </p>
          <br />
          <h3>16. Math’s and Physics for Games </h3>
          <p> This module covers the core physics and mathematical principles that are typically required for the creation of games or other scientific applications that implement realistic physical behavior of objects. The module covers the necessary classical mechanical principles and mathematical techniques required to simulate the physics of games objects in a high-level language. It also relates this material to the utilization of game-based physics engines. </p>
          <br />
          <h3>17. XR Multimodal Interaction </h3>
          <p> This module introduces students to concepts of XR (Virtual, Augmented, and Mixed Reality) interaction, and uses an industry standard games engine to develop assets, properties, controllers, and scripting for creating interactive rich media content. This is part of the “Usability and Interaction” and “Games and Computer Graphics Development “themes for Computer Science but is open to all courses with no pre-requisite. Supported coursework path is the production of a VR interactive media product. </p>
          <br />
          <h3>18. Robotics Principles </h3>
          <p> This module introduces the fundamentals of robotics and focuses on selected topics pertaining to this discipline. Its introductory part overviews the nature of robotics and, related to it, challenges, and issues. System modelling introduces techniques of deriving and computer implementation of models of dynamic systems with a special focus on kinematics of robots. Fundamentals of control cover the structure, basic analyses, and real-time implementations of control systems. </p>
          <br />
          <h3>19. Sensors & Interfaces </h3>
          <p> The module provides an understanding of integrated smart sensing devices and emphasis on the integration of microcontroller-based systems with sensors. The students will learn about standard sensors and transducers and will be introduced to SMART sensing system concepts that have been developed for IoT applications and are built as IoT components that convert the real-world variable into a digital data stream for transmission. Apart from familiarizing with smart communication protocols, the module enables the students to understand problems related to smart sensing systems and devices as well as experiment on standard interfacing circuits including microcontroller and serial bus interfacing. </p>
          <br />
          <h3>20. Biochemistry </h3>
          <p> The Biochemistry module in a Medicine course provides fundamental knowledge of the chemical processes that occur within living organisms. It explores the molecular basis of life, focusing on the structure, function, and interactions of biomolecules such as proteins, carbohydrates, lipids, and nucleic acids. Students learn about metabolic pathways, enzyme kinetics, cellular signaling, and the role of biochemistry in disease mechanisms and treatment. This module equips future physicians with essential understanding of biochemical principles underlying normal physiology and pathological conditions, enabling them to diagnose and treat diseases effectively. </p>
          <br />
          <h3>21. Marketing </h3>
          <p> The Marketing module in a Business Administration course provides students with fundamental knowledge and skills in understanding and implementing marketing strategies within organizations. It covers key concepts such as market analysis, consumer behavior, product positioning, branding, pricing strategies, promotion techniques, and distribution channels. Students learn how to develop comprehensive marketing plans that align with organizational objectives, target specific customer segments, and effectively compete in diverse market environments. Through case studies, projects, and practical exercises, students gain hands-on experience in applying marketing theories to real-world scenarios, preparing them for roles in various industries where marketing expertise is essential for business success. </p>
          <br />
          <h3>22. Clinical Psychology </h3>
          <p> The Clinical Psychology module within a Psychology course delves into the application of psychological principles and theories in diagnosing, treating, and understanding mental health disorders and issues. It covers topics such as assessment techniques, therapeutic interventions, and the ethical considerations involved in clinical practice. Students explore various approaches to therapy, ranging from psychodynamic and cognitive-behavioral to humanistic and existential perspectives. They learn about the role of the clinical psychologist in different settings, such as hospitals, private practices, and community mental health centers. </p>
          <br />
          <h3>23. Civil Engineering </h3>
          <p> The Civil Engineering module in an Engineering course typically covers foundational principles and practical applications in the field of civil engineering. This module delves into topics such as structural analysis and design, transportation engineering, geotechnical engineering, environmental engineering, water resources engineering, and construction management. Students learn about the design and construction of infrastructure such as roads, bridges, buildings, and water supply systems, as well as the management of construction projects. The module often includes hands-on projects, simulations, and site visits to provide students with real-world experience and skills applicable to a career in civil engineering. </p>
          <br />
         </div>


         <div className="detail-form modules-3">
          <label for="degree-selector"> <h2>3 rd year modules</h2> </label><hr /><br />
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
          <h3>6. Pharmacology</h3>
          <p> The Pharmacology module in a Medicine course provides students with a comprehensive understanding of drugs and their effects on the human body. It encompasses the study of pharmacokinetics, pharmacodynamics, mechanisms of action, therapeutic uses, adverse effects, and drug interactions. Students learn about different classes of drugs, their indications, contraindications, and side effects, as well as the principles of drug development and regulation. Pharmacology is essential for future healthcare professionals to make informed decisions regarding drug therapy, ensuring safe and effective patient care.</p>
          <br />
          <h3>7. Finance</h3>
          <p> The Finance module in a Business Administration course provides students with a foundational understanding of financial principles and practices essential for effective decision-making within organizations. Topics typically covered include financial statements analysis, budgeting, capital budgeting, risk management, valuation techniques, and financial markets. Through this module, students learn to interpret financial data, assess investment opportunities, manage financial resources efficiently, and understand the implications of financial decisions on the overall health and performance of a business.</p>
          <br />
          <h3>8. Management</h3>
          <p> The Management module in a Business Administration course provides students with foundational knowledge and skills essential for effectively overseeing organizations and teams. It covers key topics such as planning, organizing, leading, and controlling resources to achieve organizational goals efficiently. Students learn about various management theories, decision-making processes, leadership styles, communication techniques, and strategies for problem-solving and conflict resolution.</p>
          <br />
          <h3>9. Cognitive Psychology</h3>
          <p> Cognitive Psychology is a foundational module within the broader field of psychology that explores how humans perceive, think, remember, and solve problems. It investigates mental processes such as attention, language, memory, and decision-making, aiming to understand how these processes influence behavior and cognition. This module typically covers topics such as cognitive development, learning theories, cognitive biases, problem-solving strategies, and the neural basis of cognition. Students engage in theoretical discussions, empirical research, and practical applications to gain insight into the intricacies of the human mind and its cognitive functions.</p>
          <br />
          <br />
          <h3>10. Electrical Engineering</h3>
          <p> The Electrical Engineering module within the Engineering course provides students with fundamental knowledge and skills in the principles, concepts, and applications of electrical systems and devices. This module typically covers topics such as circuit analysis, electromagnetism, electronics, power systems, control systems, and signal processing. Through theoretical study and practical experimentation, students learn how to design, analyze, and troubleshoot electrical circuits and systems, preparing them for careers in various fields including power generation, telecommunications, electronics, and automation. The module often integrates hands-on laboratory work and projects to reinforce theoretical concepts and enhance practical skills, fostering a comprehensive understanding of electrical engineering principles and their real-world applications.
</p>
          <br />
        </div>


         <div className='detail-form modules-4'>
          <label for="degree-selector"> <h2>4 th year modules </h2> </label><hr /><br />
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

           <h3>2. Applied AI</h3>  
           <p>The module will provide students with an understanding of the foundations of Artificial Intelligence and principal sub-fields of AI that have made significant impact, including but not limited to: Planning, Multi Agent Systems, Fuzzy Logic, Neural Networks, Evolutionary Computation, Computer Vision, Reinforcement Learning, Natural Language Processing, and Deep Learning. Each week an essential technique will be demonstrated via complete implementation followed by a presentation of the theory and conditions needed to enable the student to set up and use the techniques themselves. </p>
           <br />
           <h3>3. Cyber Security</h3>  
           <p> This module examines various aspects of computer and network security giving a sound introduction to theoretical and practical areas such as network security, cryptography, attack vectors used by hackers, security architecture, methodologies for security hardening and defense and penetration testing strategies. A substantial amount of work will be laboratory based, involving the deployment of security tools, the hardening of operating systems and the analysis of compromised systems. </p>
           <br />
           <h2> Optional Modules </h2>
           <h3>4. Mobile Native Application Development</h3>  
           <p> This module shall give the student the necessary knowledge and practical experience to develop native applications for mobile platforms and in particular iOS. Swift and Objective C programming languages and relevant OOD principles are taught. Core and other frameworks are covered and utilized. Development patterns are taught in the context of the iOS mobile operating system using the XCode development environment. </p>
           <br />
           <h3>5. Advanced Server-Side Web Development</h3>  
           <p> The module covers the techniques and technologies involved in building large-scale advanced web applications.  It is suitable for students with a background in web design and web development, with knowledge of web scripting and SQL.    </p>
           <br />
           <h3>6. Usability Testing and Evaluation</h3>  
           <p> The module provides students with essential skills and practice in a range of usability techniques, how to conduct usability studies and evaluations of a wide range of products or platforms. The importance of applied understanding of the different evaluation approaches and the use of experimental design and statistical analysis is illustrated through real world examples. The ability to interpret and critically discuss results is stressed throughout.    </p>
           <br />
           <h3>7. Advanced Interactive Media Development</h3>  
           <p> This module covers essential topics of advanced animation production (motion capture pipeline, data processing, animation blending, and incorporation of the animation in an industry standard game engine). It also provides an understanding of the issues, technologies and concepts underlying the vision of pervasive computing infrastructure to create alternative interaction styles. Specifically, concepts and basic techniques of 3D capture, analysis and representation using commercial consumer depth camera (currently Kinect).   </p>
           <br />
           <h3>8. Digital Marketing, Social Media, and Web Analytics</h3>  
           <p> The module addresses the requirements and opportunities of the burgeoning Search Engine Optimization (SEO), Digital Marketing, Social Media and Web Analytics industry by exposing students to the theory and practice of the field. This module gives theoretical and practical knowledge of how to effectively promote an interactive multimedia product (IMP) in terms of SEO, email marketing, and social media marketing. This module also covers multimedia security and privacy issues through examples from SEO, social media, and web analytics.   </p>
           <br />
           <h3>9. Strategic Management of Information Systems</h3>  
           <p> The module "Strategic Management of Information Systems" focuses on the integration of information technology and business strategy to enhance organizational performance. It explores the role of information systems in supporting and shaping strategic decision-making processes within a company. Topics covered may include aligning IT with business goals, leveraging emerging technologies, managing IT resources effectively, assessing and mitigating risks, and understanding the impact of information systems on overall organizational competitiveness. Students in this module typically develop a comprehensive understanding of how strategic management principles can be applied to optimize the use of information systems for achieving long-term business objectives.
</p>
           <br />
           <h3>10. Information Driven Entrepreneurship and Enterprise</h3>  
           <p> This module will present and analyze major developments and issues in entrepreneurship and enterprise, underpinned and supported by information communication technologies, especially by the Internet, enterprise systems and cloud computing. It will also encourage a mind-set in creative thinking in seeking opportunities for new information driven start-ups and provide a critical assessment of their impact. </p>
           <br />
           <h3>11. Operational Research and Optimization</h3>  
           <p> This module provides analytic topics in Operational Research. It covers formal optimization models and computational solutions for real-world problems. The topics covered include (non-)Integer Programming, Network models, Dynamic programming, and Multiple Objective Optimization. Advanced heuristic search methods such as genetic algorithms and particle swarm optimization are also addressed. The concepts of time-series forecasting models are introduced. </p>
           <br />
           <h3>12. Data Visualization and Dashboarding</h3>  
           <p> This module provides an applied understanding and practical experience of the data visualization field including human perception, data infographics, dynamic visualizations methods and techniques and industry standard toolsets (commercial and open source) such Tableau. </p>
           <br />
           <h3>13. Game AI </h3>  
           <p> Creating robust game world environments and model individual components using logic and mathematical modelling to replicate human behavior is one of the greatest challenges for game developers, yet the commercial success of a game is often dependent upon the quality of its intelligent modelling. This module introduces an engagingly realistic and immersive experience in modern videogames for creating game terrains and simulating complex behavior of game objects. The focus of the module is to learn how to create an automatic random game world with metrics to generate human like intelligent behaviors primarily in non-player characters (NPCs). </p>
           <br />
           <h3>14. Applied Robotics</h3>  
           <p> This module builds on the previous knowledge and skills taught in the Level 5 module Robotic Principles. The main areas of teaching involve robotics dynamics and design of robotic control systems. The students are prepared to undertake complex tasks in analyzing and synthesizing robotic systems. The ethical and societal issues related to robotics signaled in the level 5 module are now covered in more deep and extensive manner. </p>
           <br />
           <h3>15. Microbiology</h3>  
           <p> The Microbiology module in the field of Medicine focuses on the study of microorganisms such as bacteria, viruses, fungi, and parasites, and their interactions with human health and disease. It covers topics such as the structure, function, and classification of microorganisms, as well as their role in infectious diseases, immunology, and antimicrobial therapy. This module also explores laboratory techniques used for the identification and characterization of microorganisms, as well as strategies for prevention, control, and treatment of microbial infections.
 </p>
           <br />
           <h3>16. Pathology</h3>  
           <p> The module on Pathology within the field of Medicine explores the study of diseases, their causes, mechanisms, and effects on the human body. It delves into understanding the cellular and molecular changes that underlie various diseases, ranging from infections to chronic conditions like cancer. Students learn to identify pathological processes through laboratory techniques, imaging studies, and clinical observation. Overall, it provides a foundational understanding of the pathological basis of illnesses, essential for medical professionals to effectively diagnose and manage patients. </p>
           <br />
           <h3>17. Human Resources</h3>  
           <p> The Human Resources module within the Business Administration course focuses on the management of an organization's most valuable asset: its people. This module covers factors including recruitment, selection, training, performance management, compensation, and employee relations. It aims to provide students with an understanding of the strategic importance of human resource management in achieving goals, as well as practical skills for effectively managing personnel within diverse workplace environments. Through this module, students gain insights into the critical role HR plays in driving organizational success and learn techniques for fostering a productive and motivated workforce. </p>
           <br />
           <h3>18. Social Psychology</h3>  
           <p> The module "Social Psychology" within the broader field of psychology explores how individuals think, feel, and behave in social contexts. It examines the influence of social interactions, groups, and cultures on human behavior, attitudes, and perceptions. Topics may include social cognition, conformity, obedience, prejudice, interpersonal attraction, group dynamics, and social influence. Students learn about the practical applications of social psychology in various real-world settings, such as marketing, counseling, and organizational behavior. </p>
           <br />
           <h3>19. Applied Robotics</h3>  
           <p> This module builds on the previous knowledge and skills taught in the Level 5 module Robotic Principles. The main areas of teaching involve robotics dynamics and design of robotic control systems. The students are prepared to undertake complex tasks in analyzing and synthesizing robotic systems. The ethical and societal issues related to robotics signaled in the level 5 module are now covered in more deep and extensive manner. </p>
           <br />
           <h3>20. Industrial-Organizational Psychology</h3>  
           <p> The Industrial-Organizational Psychology module within the field of psychology focuses on the application of psychological principles within workplace settings. It explores topics such as employee motivation, organizational behavior, leadership, job satisfaction, personnel selection, training, and performance appraisal. This module delves into understanding how individuals behave within organizations, how to improve organizational effectiveness, and how to enhance the well-being and productivity of employees.
 </p>
           <br />
           <h3>21. Chemical Engineering</h3>  
           <p> The Chemical Engineering module within an Engineering course provides students with a fundamental understanding of chemical processes and their application in various industries. Students explore topics such as thermodynamics, fluid mechanics, reaction kinetics, mass transfer, and process design. Through theoretical learning and practical experiments, they gain insights into the principles underlying chemical reactions, separation processes, and the design of chemical reactors and unit operations. This module equips students with the skills needed to analyze and optimize chemical processes, ensuring efficiency, safety, and sustainability in industrial applications. </p>
           <br />
           <h3>22. Aerospace Engineering</h3>  
           <p> The Aerospace Engineering module in the Engineering course focuses on the principles and practices of designing, constructing, and operating aircraft, spacecraft, and related systems. This module delves into aerodynamics, propulsion systems, materials science, structural analysis, and control systems specific to aerospace applications. Students learn about the challenges and innovations in aerospace engineering, including topics such as flight dynamics, space exploration, and the integration of advanced technologies like artificial intelligence and robotics. Through theoretical study, laboratory experiments, and practical projects, students gain a comprehensive understanding of the complexities involved in designing vehicles that traverse Earth's atmosphere and beyond. </p>
           <br />
         </div>
         <br /><br />

         <a href="#" class="top">&#128743;</a>
      </div>

    </div>
  )
}
export default ProgramDetails;