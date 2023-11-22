import React from 'react';
import NavBar from './commen/NavBar';

function Home() {
  return (
    <div className="main">
      <div>
        {/* NavBar is a component */}
        <NavBar value={"home"}/>
        <div className="text">
          <h1><strong>Career Prediction </strong></h1>
        </div>
        <div className="paragraph">
          <p>
            This is a software is used for a newly enroll student or a current
            student to get their career path as a prediction. <br/> Also, even a past
            university student can upload subjects, ideas, experiences etc. <br/> done
            during his university days to this website. br Through that, a newly or
            current student can get the job path as a prediction by comparing the
            details of past students.
          </p>
        </div>
      </div>
    
    </div>
    
  )
}

export default Home;