import React, { useState } from 'react';
import NavBar from './commen/NavBar';



function ProgramDetails() {
  return (
    <div className="main">
      <div>
       <NavBar value={"program-details"}  />
        <div className="form-program-selector">
            <h2>Please select your degree program </h2>
                  
            <label for="degree-selector">Select your degree program: </label><br />
            <select name="degree-program">
              <option value="Software Engineering=">BEng(Hnos) Software Engineering </option>
              <option value="Computer Science =">BSc(Hons) Computer Science</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <br/> <br/>
        </div>
        <div className="program-detail-image">
          <img src="Images/program-details-image.avif" alt=""/>

        </div>
        <div className="program-detail-content">
            <p> <strong>BSc (Hons) Computer Science</strong> <br/>
              BSc (Hons) Computer Science provides a solid foundation and training regarding the fundamentals of the computer science field, along with the opportunity to specialize in Mobile and Web Computing, 
              <br/>Games and Computer Graphics Development or Multimedia Computing disciplines. It would provide technical knowledge to develop applications to a wide variety of end-user requirements and situations. 
              <br/> It also aims at harnessing and developing professional attitudes and interpersonal skills that are required to work effectively, professionally and ethically within the ICT sphere.</p>
        </div>
        <div className="course-outline">
          <p> <strong>Course Outline</strong> <br/>
            The key aspects of this course are its flexibility and the ability for you to build a customized route within the computer science discipline. You will be able to follow recommended pathways from a range of computing areas that suit your developing interests. You will develop a wide range of skills and knowledge in areas such as systems analysis & design, mobile/web application development, game and multimedia development, user interface development and network security.</p>
        </div>
        <div className="detail-form modules">
          <label for="degree-selector"> <h2>1 st year modules</h2> </label><br/>
                 <h3> 1. Trends in computer science</h3>
                 <p>By the end of the module the successful student will be able to:
                  LO1 Reflect on the role of Computer Science as a discipline and its different branches, its relationships to other scientific and technological disciplines, and the social effects it has had;
                  LO2 Discuss with confidence key features of current trends in Modern Computing and their impact on your career planning and empoyability prospects;
                  
                  LO3 Summarise the key components of a professional code of conduct and reflect on how the concepts it enshrines will affect your professional life;
                  LO4 Work as a team to prepare a presentation on the legal and ethical aspects of specified
                  case studies; and produce a report detailing your work.
                  LO5 Engage in research and work within a commonly accepted academic and professional
                  framework which employs appropriate styles of documentation and referencing.
                  </p>
                  <br/>
                  <h3> 2. Software Development I </h3>
                 <p>Analyse specific problems and design their solutions by applying appropriate algorithmic techniques;
                  LO2 Apply programming concepts to implement solutions in the taught programming language;
                  LO3 Implement and manipulate simple data structures;
                  LO4 Use an integrated development environment to create programs to satisfy a simple specification;
                  
                  LO5 Demonstrate a good level of knowledge and understanding of the basic principles and constructs involved in writing computer programs.
                  </p>
                  <br/>
                  <h3> 3. Software Development II </h3>
                  <p>The module aims to develop skills in the selection and implementation of problem-solving algorithms while learning the Java programming language. It will strengthen abilities in the implementation of algorithms, in terms of adherence to requirements, design and modelling, through to the application of sound programming principles. The understanding of structures and advanced programming methods will also be developed, including sorting, the implementation of classes and methods, as well as more sophisticated data structures such as lists, queues, and stacks.</p>
                  <br/>
                    <h3>4. Mathematics for Computing </h3>
                    <p> Need to be added  </p>
                    <br/>
                    <h3>5. Computer Systems Fundamentals </h3>
                    <p> Need to be added  </p>
                    <br/>
                    <h3>6. Web Design and Development </h3>
                    <p> Need to be added  </p>
                 
        </div>

      </div>

    
    </div>

  )
}

export default ProgramDetails;