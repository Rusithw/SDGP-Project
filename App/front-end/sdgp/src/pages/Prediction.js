import React, { useEffect, useState } from 'react';
import NavBar from './commen/NavBar';
import { useNavigate } from "react-router-dom";

function Prediction() {

  const navigate = useNavigate();

  useEffect(() => {
   const user_session_value =  window.sessionStorage.getItem("user_name");
   if(user_session_value === null || user_session_value === ""){
    navigate("/login");
   }

   userDetailsByUserName(user_session_value);
   

  }, []);

  const [data_set, setData] = useState({

    degreeProgram: "",
    year1Module1: "",
    year1Module2: "",
    year1Module3: "",
    year1Module4: "",
    year1Module5: "",
    year1Module6: "",
    year2Module1: "",
    year2Module2: "",
    year2Module3: "",
    year2Module4: "",
    year2Module5: "",
    year2Module6: "",
    year4Module1: "",
    year4Module2: "",
    year4Module3: "",
    year4Module4: "",
    year4Module5: "",
    year4Module6: "",

    

  });

  useEffect(() => {
    loadDegreePrograms();
  }, [])

  const [userDetailsByUserName_data, setUserDetailsByUserName] = useState("");

  
  const[program_data, setProgramData] = useState([]);
  const[modules_data, setModuleData] = useState([]);

  const [first_year_modules, setFirstYearModules] = useState([]);
  const [second_year_modules, setSecondYearModules] = useState([]);
  const [third_year_modules, setThirdYearModules] = useState([]);
  const [fourth_year_modules, setFourthYearModules] = useState([]);

  const handleModuleChange = (year, module) => {
    if(year ===1){
      if(first_year_modules.includes(module)){
        setFirstYearModules(
          first_year_modules.filter((item) => item !== module)
        );
      }else{
        setFirstYearModules([...first_year_modules, module]);
      }
    }
  }

  const handleChange = (event) => {

    const {name, value} = event.target;
    setData({
      ...data_set,
      [name]: value,
    });
  };

  const userDetailsByUserName = async (user_name) => {
    const payLoad = {
      "user_name": user_name
     }
      try {
        const response = await fetch('http://localhost:3001/api/userDetailsByUserName', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payLoad),
        });
  
        if (!response.ok) {
          throw new Error('Invalid');
        }
  
        const data = await response.json();
        
       setUserDetailsByUserName(data[0].user_first_name);
        
     
      } catch (error) {
        console.error('Error modules in:', error);
      
      }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data_set);
  };

  const programSelect = async (event) => {
    const payLoad = {
     "university_program_id": event.target.value
    }
     try {
       const response = await fetch('http://localhost:3001/api/getModules', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(payLoad),
       });
 
       if (!response.ok) {
         throw new Error('Invalid');
       }
 
       const data = await response.json();
       console.log(data);  
       setModuleData(data);
       
    
     } catch (error) {
       console.error('Error modules in:', error);
     
     }
   }


  const loadDegreePrograms = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/getPrograms');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const result = await response.json();
      setProgramData(result);
    } catch (error) {
      console.log(error.message);
    }
  }



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
                  <h2> {userDetailsByUserName_data}  Please fill your details here</h2>
                  
                  <label for="degree-selector">Select you degree program: </label><br />
                  <select name="degree-program" onChange={programSelect}>
                  <option value="" >Please select an option</option>
                  {program_data.map((item) => (
            <option key={item.university_program_id} value={item.university_program_id}> {item.university_program_name} </option>
        ))}
                  </select>
                  <br/> <br/>
                  
                

                  <div className="year-module-colour">
                   
                  {modules_data.map((item) => (
                        item.year === "1" ?<div key={item.university_program_modules_id}>
                        <input
                          type="checkbox"
                          onChange={() => handleModuleChange(1, item.university_module_id)}
                        />
                        {item.university_module_name}
                      </div>
                      :""
                    )
                  )}

                   
                  </div>
                 
                  <div className="year-module-non-colour">
                    <label for="second-year-modules">Select your 2nd year module 1: </label><br/>
                    <select name="year2Module1" onChange={handleChange}>
                    <option value="Select your 2nd year module 1">Select your 2nd year module 1</option>
                      <option value="Object Oriented Programming">Object Oriented Programming</option>
                    </select>
                    <br/> <br/>
                    <label for="second-year-modules">Select your 2nd year module 2: </label><br/>
                    <select name="year2Module2" onChange={handleChange}>
                    <option value="Select your 2nd year module 2">Select your 2nd year module 2</option>
                      <option value="Client-Server Architectures">Client-Server Architectures</option>
                    </select>
                    <br/> <br/>
                    <label for="second-year-modules">Select your 2nd year module 3: </label><br/>
                    <select name="year2Module3" onChange={handleChange}>
                    <option value="Select your 2nd year module 3">Select your 2nd year module 3</option>
                      <option value="Software Development Group Project">Software Development Group Project</option>
                    </select>
                    <br/> <br/>
                    <label for="second-year-modules">Select your 2nd year module 4: </label><br/>
                    <select name="year2Module4" onChange={handleChange}>
                    <option value="Select your 2nd year module 4">Select your 2nd year module 4</option>
                      <option value="Database Systems">Database Systems</option>
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
                    <select name="year4Module1" onChange={handleChange}>
                      <option value="Select your 4th year module 1">Select your 4th year module 1</option>
                      <option value="Security and Forensics">Security and Forensics</option>
                    </select>
                    <br/> <br/>
                    <label for="fourth-year-modules">Select your 4th year module 2: </label><br/>
                    <select name="year4Module2" onChange={handleChange}>
                    <option value="Select your 4th year module 2">Select your 4th year module 2</option>
                      <option value="Final Year Project">Final Year Project</option>
                    </select>
                    <br/> <br/>
                    
                    <label for="fourth-year-modules">Select your 4th year module 3: </label><br/>
                    <select name="year4Module3" onChange={handleChange}>
                    <option value="Select your 4th year module 3">Select your 4th year module 3</option>
                      <option value="Applied Artificial Intelligence">Applied Artificial Intelligence</option>
                    </select>
                    <br/> <br/>
                    <label for="fourth-year-modules">Select your 4th year module 4: </label><br/>
                    <select name="year4Module4" onChange={handleChange}>
                    <option value="Select your 4th year module 4">Select your 4th year module 4</option>
                      <option value="Mobile Native Application Development">Mobile Native Application Development</option>
                    </select>
                    <br/> <br/>
                    <label for="fourth-year-modules">Select your 4th year module 5: </label><br/>
                    <select name="year4Module5" onChange={handleChange}>
                    <option value="Select your 4th year module 5">Select your 4th year module 5</option>
                      <option value="Advanced Server-Side Web Programming">Advanced Server-Side Web Programming</option>
                    </select>
                    <br/> <br/>
                    <label for="fourth-year-modules">Select your 4th year module 6: </label><br/>
                    <select name="year4Module6" onChange={handleChange}>
                    <option value="Select your 4th year module 6">Select your 4th year module 6</option>
                      <option value="Usability Testing">Usability Testing</option>
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