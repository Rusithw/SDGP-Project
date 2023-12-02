import React, { useState } from 'react';
import NavBar from './commen/NavBar';


function Prediction() {

  const [data_set, setData] = useState({

    degreeProgram: "",
    year1Module1: "",
    year1Module2: "",
    year1Module3: "",
    year1Module4: "",
    year1Module5: "",
    year1Module6: "",

  });

  const handleChange = (event) => {

    const {name, value} = event.target;
    setData({
      ...data_set,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data_set);
  };

  return (
    <div className="main">
      <div> 
      <NavBar value={"prediction"}/>
       <div className="width-100">
        <div className="width-50 prediction-image">
            <div className="prediction-img-content">
                <img src="Images/prediction-image.jpg" alt="#"/>
            </div>
        </div>
        <div className="width-50">
            <form onSubmit={handleSubmit}>
            <div className="detail-form">
                <div className="nav-padding">
                  <h2>Please fill your details here</h2>
                  
                  <label for="degree-selector">Select you degree program: </label><br />
                  <select name="degree-program" onChange={handleChange}>
                  <option value="Select your degree program:=">Select you degree program:</option>
                    <option value="BEng(Hons)Software Engineering">BEng(Hons)Software Engineering</option>
                    <option value="BSc(Hons)Computer Science">BSc(Hons)Computer Science</option>
                    <option value="BSc(Hons)Artificial Intelligence And Data Science">BSc(Hons)Artificial Intelligence And Data Science</option>
                  </select>
                  <br/> <br/>
                  
                

                  <div className="year-module-colour">
                    <label for="first-year-modules">Select your 1st year module 1 </label><br/>
                    <select name="modules" onChange={handleChange}>
                    <option value="Select your 1st year module 1">Select your 1st year module 1</option>
                      <option value="TSC=">Trends in Computer Science</option>
                    </select>
                    <br/> <br/>
                

                    <label for="first-year-modules"> Select your 1st year module 2 </label><br/>
                    <select name="modules" onChange={handleChange}>
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="first-year-modules"> Select your 1st year module 3 </label><br/>
                    <select name="modules" onChange={handleChange}>
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="first-year-modules"> Select your 1st year module 4 </label><br/>
                    <select name="modules" >
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="first-year-modules"> Select your 1st year module 5 </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="first-year-modules"> Select your 1st year module 6 </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                  </div>
                 
                  <div className="year-module-non-colour">
                    <label for="second-year-modules">Select your 2nd year module 1: </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="second-year-modules">Select your 2nd year module 2: </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="second-year-modules">Select your 2nd year module 3: </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="second-year-modules">Select your 2nd year module 4: </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="second-year-modules">Select your 2nd year module 5: </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="second-year-modules">Select your 2nd year module 6: </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                  </div>

                 
                  

                  <div className="year-module-colour">
                    <label for="third-year-modules">Select your 3rd year module 1 </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                    <br/> <br/>
                

                    <label for="third-year-modules"> Select your 3rd year module 2 </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="third-year-modules"> Select your 3rd year module 3 </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="third-year-modules"> Select your 3rd year module 4 </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="third-year-modules"> Select your 3rd year module 5 </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="third-year-modules"> Select your 3rd year module 6 </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                  </div>

               
                  
                  <div className="year-module-non-colour">
                    <label for="fourth-year-modules">Select your 4th year module 1: </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="fourth-year-modules">Select your 4th year module 2: </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="fourth-year-modules">Select your 4th year module 3: </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="fourth-year-modules">Select your 4th year module 4: </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="fourth-year-modules">Select your 4th year module 5: </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                    <label for="fourth-year-modules">Select your 4th year module 6: </label><br/>
                    <select name="modules">
                      <option value="volvo=">Volvo</option>
                    </select>
                    <br/> <br/>
                  </div>
                  
                  
                  
                    <div className="button-editor">
                        <div className="clear-button">
                            <button className="button" type="button">CLEAR</button>
                          </div>
                          <div className="Submit-button">
                            <button className="button" type="SUBMIT">SUBMIT</button>
                          </div>
                    </div>
                </div>
              </div>
            </form>
        </div>
       
       </div>
      </div>
    </div>
  )
}

export default Prediction;