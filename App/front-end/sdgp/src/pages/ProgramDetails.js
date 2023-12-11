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
          <h3>5. Advanced Client-Side Development </h3>
          <p> This module provides practical knowledge and understanding of client-side or/else front end development programming using advanced HTML5, CSS3 and JavaScript. Client-side technologies, including HTML5 Audio and Video are covered together with a client-side scripting language, a UI and CSS framework and a client-side scripting framework. The module also covers issues pertaining to front-end security.  </p>
          <br />
          <h3>6. Mobile Application Development</h3>
          <p> The module is an introduction to software development on mobile devices such as mobile phones, tablets, and wearables. It concentrates on the Android platform. The main contents include: The Android mobile programming architecture. Restrictions on using small devices such as mobile phones tablets and wearables. Programming user interfaces, networking, persistent storage, and multi-threading. Device profiling, application deployment and installation.  </p>
          <h3>7. Server-Side Web Development</h3>
          <p> This module covers the design and implementation of commercial dynamic web applications from a server-side programming and database perspective. It is suitable for students with a strong interest in SQL, web programming, HTML, CSS, and browser scripting. A server-side language is covered to the depth required for implementing high-quality fully functional web- enabled database applications that fittingly support an organization’s business processes.</p>
          <h3>8. HCI &User Experience</h3>
          <p> The module introduces students to the theoretical aspects of Human Computer Interaction (HCI) and User Experience (UX) as well as provides a practical understanding of current principles of effective interface design. The module equips students with the practical skills needed for the design and evaluation of interactive systems using a user-centered approach. It provides an understanding of the relevance and application of human abilities and limitations to the design of interactive systems and how context influences human system interaction.</p>
        </div>

      </div>


    </div>

  )
}

export default ProgramDetails;