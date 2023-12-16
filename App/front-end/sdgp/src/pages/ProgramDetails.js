import React, { useState } from 'react';
import NavBar from './commen/NavBar';



function ProgramDetails() {
  return (
    <div className="main">
      <div>
        <NavBar value={"program-details"} />
        <div className="form-program-selector">
          <h2>Please select your degree program </h2>

          <label for="degree-selector">Select your degree program: </label><br />
          <select name="degree-program">
            <option value="Software Engineering=">BEng(Hnos) Software Engineering </option>
            <option value="Computer Science =">BSc(Hons) Computer Science</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <br /> <br />
        </div>
        <div className="program-detail-image">
          <img src="Images/program-details-image.avif" alt="" />

        </div>
        <div className="program-detail-content">
          <p> <strong>BSc (Hons) Computer Science</strong> <br />
            BSc (Hons) Computer Science provides a solid foundation and training regarding the fundamentals of the computer science field, along with the opportunity to specialize in Mobile and Web Computing,
            <br />Games and Computer Graphics Development or Multimedia Computing disciplines. It would provide technical knowledge to develop applications to a wide variety of end-user requirements and situations.
            <br /> It also aims at harnessing and developing professional attitudes and interpersonal skills that are required to work effectively, professionally and ethically within the ICT sphere.</p>
        </div>
        <div className="course-outline">
          <p> <strong>Course Outline</strong> <br />
            The key aspects of this course are its flexibility and the ability for you to build a customized route within the computer science discipline. You will be able to follow recommended pathways from a range of computing areas that suit your developing interests. You will develop a wide range of skills and knowledge in areas such as systems analysis & design, mobile/web application development, game and multimedia development, user interface development and network security.</p>
        </div>
        <div className="detail-form modules">
          <label for="degree-selector"> <h2>1 st year modules</h2> </label><br />
          <h3> 1. Trends in computer science</h3>
          <p>This module focuses on trends in Computer Science which currently attract considerable industry and academic interest. It allows the students to acquire research skills which will prepare them for the group and final year project and will support their employability prospects. At the same time, it introduces key aspects of working as a professional in the world of computing, including consideration of ethics, privacy, data protection and confidentiality, and how these are incorporated into professional codes of practice such as the BCS Code of Conduct.
          </p>
          <br />
          <h3> 2. Software Development I </h3>
          <p>An introduction to computer programming in a high-level programming language. The module concentrates on teaching the fundamentals of programming and algorithm design. Basic coding structures such as sequence, selection, and iteration will be covered. There will be an emphasis on practical exercises to develop programming experience and confidence.
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

        </div>

        <div className="detail-form modules">
          <label for="degree-selector"> <h2>2 nd year modules</h2> </label><br />
          <h2> Core Modules </h2>
          <br />
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
          <br />

          <h3>5. Advanced Client-Side Development </h3>
          <p> This module provides practical knowledge and understanding of client-side or/else front end development programming using advanced HTML5, CSS3 and JavaScript. Client-side technologies, including HTML5 Audio and Video are covered together with a client-side scripting language, a UI and CSS framework and a client-side scripting framework. The module also covers issues pertaining to front-end security.  </p>
          <br />
          <h3>6. Mobile Application Development</h3>
          <p> The module is an introduction to software development on mobile devices such as mobile phones, tablets, and wearables. It concentrates on the Android platform. The main contents include: The Android mobile programming architecture. Restrictions on using small devices such as mobile phones tablets and wearables. Programming user interfaces, networking, persistent storage, and multi-threading. Device profiling, application deployment and installation.  </p>
          <br />
          <h3>7. Server-Side Web Development</h3>
          <p> This module covers the design and implementation of commercial dynamic web applications from a server-side programming and database perspective. It is suitable for students with a strong interest in SQL, web programming, HTML, CSS, and browser scripting. A server-side language is covered to the depth required for implementing high-quality fully functional web- enabled database applications that fittingly support an organization’s business processes.</p>
          <br />
          <h3>8. HCI &User Experience</h3>
          <p> The module introduces students to the theoretical aspects of Human Computer Interaction (HCI) and User Experience (UX) as well as provides a practical understanding of current principles of effective interface design. The module equips students with the practical skills needed for the design and evaluation of interactive systems using a user-centered approach. It provides an understanding of the relevance and application of human abilities and limitations to the design of interactive systems and how context influences human system interaction.</p>
          <h3>9. 3D Interactive Media Development </h3>
          <p> This module introduces students to concepts of 3D user interfaces for interactive media. It covers essential topics including 3D modelling principles, methods and techniques, complex object creation, deformation and transformations, texture mapping, color, and lighting. It uses an industry standard games engine to demonstrate 3D animation concepts, properties, controllers, and scripting to create interactive media content. This is part of the “Usability and Interaction” and “Games and Computer Graphics Development” themes for Computer Science but is open to all courses with no prerequisite. Supported coursework path is the production of an interactive rich media product.  </p>
          <br />
          <h3>10. XR & Multimodal Interaction </h3>
          <p> This module introduces students to concepts of XR (Virtual, Augmented, and Mixed Reality) interaction, and uses an industry standard games engine to develop assets, properties, controllers, and scripting for creating interactive rich media content. This is part of the “Usability and Interaction” and “Games and Computer Graphics development “themes for Computer Science but is open to all courses with no prerequisite. Supported coursework path is the production of a VR interactive media product.  </p>
          <br />
          <h3>11. Information Technology Security </h3>
          <p> This module examines the issues involved with recognizing security threats to computer systems, their consequences, and methods of dealing with such threats. It provides an overview of access controls, software development security, business continuity, legal issues and compliance, and physical security. </p>
          <br />
          <h3>12. Algorithms: Theory, Design, and Implementation </h3>
          <p> Algorithms are among the fundamentals of computer science and software engineering and at the heart of artificial intelligence, machine learning, data science and their applications to real world problem solving in digital humanities, economics, biosciences, social sciences, etc. The module introduces the students into the theory and practice of algorithmic strategies, development, and implementation. Hence, the module equips the students with a road map of mappings between real world problems and suitable algorithmic approaches for their solutions. The latter is crucial for the students’ professional life as problem solvers and thinkers in IT industry, society, and humanity. </p>
          <br />
          <h3>13. Machine Learning and Data Mining </h3>
          <p> This module provides an understanding and hands-on experience in the fields of machine learning and data mining, covering the full life cycle from preparing data to validating and optimizing the learned model. The module covers different algorithms and approaches to machine learning and data mining, and the issues of using them on data sets of different sizes and complexity. </p>
          <br />
          <h3>14. Game Engine Architecture </h3>
          <p> This module introduces students to modern game engine architecture and technologies. The conceptual architecture framework and the subsystem integration including the low-level foundation systems, the rendering engine, game asset management, the physics simulation, event-based gameplay system will be critically accessed. Students will gain the theory underlying the various subsystems that comprise a commercial game engine and the data structures and essential algorithms and develop practical skills that are typically used to implement a 3D game prototype using industry game engines. </p>
          <br />
          <h3>15. Math’s and Physics for Games </h3>
          <p> This module covers the core physics and mathematical principles that are typically required for the creation of games or other scientific applications that implement realistic physical behavior of objects. The module covers the necessary classical mechanical principles and mathematical techniques required to simulate the physics of games objects in a high-level language. It also relates this material to the utilization of game-based physics engines. </p>
          <br />
          <h3>16. XR Multimodal Interaction </h3>
          <p> This module introduces students to concepts of XR (Virtual, Augmented, and Mixed Reality) interaction, and uses an industry standard games engine to develop assets, properties, controllers, and scripting for creating interactive rich media content. This is part of the “Usability and Interaction” and “Games and Computer Graphics Development “themes for Computer Science but is open to all courses with no pre-requisite. Supported coursework path is the production of a VR interactive media product. </p>
          <br />
          <h3>17. Robotics Principles </h3>
          <p> This module introduces the fundamentals of robotics and focuses on selected topics pertaining to this discipline. Its introductory part overviews the nature of robotics and, related to it, challenges, and issues. System modelling introduces techniques of deriving and computer implementation of models of dynamic systems with a special focus on kinematics of robots. Fundamentals of control cover the structure, basic analyses, and real-time implementations of control systems. </p>
          <br />
          <h3>18. Sensors & Interfaces </h3>
          <p> The module provides an understanding of integrated smart sensing devices and emphasis on the integration of microcontroller-based systems with sensors. The students will learn about standard sensors and transducers and will be introduced to SMART sensing system concepts that have been developed for IoT applications and are built as IoT components that convert the real-world variable into a digital data stream for transmission. Apart from familiarizing with smart communication protocols, the module enables the students to understand problems related to smart sensing systems and devices as well as experiment on standard interfacing circuits including microcontroller and serial bus interfacing. </p>
          <br />
         </div>

         <div className='detail-form modules'>
          <label for="degree-selector"> <h2>4 th year modules </h2> </label>
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
           <p>The module will provide students with an understanding of the foundations of Artificial Intelligence and principal sub-fields of AI that have made significant impact, including but not limited to: Planning, Multi Agent Systems, Fuzzy Logic, Neural Networks, Evolutionary Computation, Computer Vision, Reinforcement Learning, Natural Language Processing, and Deep Learning. Each week an essential technique will be demonstrated via complete implementation followed by a presentation of the theory and conditions needed to enable the student to set up and use the techniques themselves. </p>
           <br />
           <h3>3. Cyber Security</h3>   
           <p> This module examines various aspects of computer and network security giving a sound introduction to theoretical and practical areas such as network security, cryptography, attack vectors used by hackers, security architecture, methodologies for security hardening and defense and penetration testing strategies. A substantial amount of work will be laboratory based, involving the deployment of security tools, the hardening of operating systems and the analysis of compromised systems. </p>
           <br />
           <h2> Optional Modules </h2>
          <br />
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
           <p> TO DO  </p>
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
         </div>

      </div>


    </div>

  )
}

export default ProgramDetails;