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

  
const [year_modules, setYearModules] = useState([]);

   const [first_year_modules, setFirstYearModules] = useState([]);
   const [second_year_modules, setSecondYearModules] = useState([]);
   const [third_year_modules, setThirdYearModules] = useState([]);
   const [fourth_year_modules, setFourthYearModules] = useState([]);
  
   const handleModuleChange = (event) => {
    var module = event.target.value;
    var year = event.target.name;
    
    console.log(year)
    console.log(module)

    if(year === "year1"){
      if(first_year_modules.includes(module)){
        setFirstYearModules(
          first_year_modules.filter((item) => item !== module)
        );
      }else{
        setFirstYearModules([...first_year_modules,module]);
      }
    }
    
    if(year === "year2"){
      if(second_year_modules.includes(module)){
        setSecondYearModules(
          second_year_modules.filter((item) => item !== module)
        );
      }else{
        setSecondYearModules([...second_year_modules, module]);
      }
    }

    if(year === "year3"){
      if(third_year_modules.includes(module)){
        setThirdYearModules(
          third_year_modules.filter((item) => item !== module)
        );
      }else{
        setThirdYearModules([...third_year_modules, module]);
      }
    }
    
    if(year === "year4"){
      if(fourth_year_modules.includes(module)){
        setFourthYearModules(
          fourth_year_modules.filter((item) => item !== module)
        );
      }else{
        setFourthYearModules([...fourth_year_modules, module]);
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
       setYearModules(data);
       
    
     } catch (error) {
       console.error('Error modules in:', error);
     
     }
   }


   const [load_Degree_Programs, setLoadDegreePrograms] = useState([]);

  const loadDegreePrograms = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/getPrograms');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const result = await response.json();
      setLoadDegreePrograms(result);
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
                  {load_Degree_Programs.map((item) => (
            <option key={item.university_program_id} value={item.university_program_id}> {item.university_program_name} </option>
        ))}
                  </select>
                  <br/> <br/>
                  
                

                  <div className="year-module-colour">
                  <label for="first-year-modules">Select your 1st year modules : </label><br/> 
                  {year_modules.map((item) => (
                        item.year === "1" ?<div key={item.university_program_modules_id}>
                        <input
                          name='year1'
                          value={item.university_program_modules_id}
                          type="checkbox"
                          onChange={handleModuleChange}
                        />
                        {item.university_module_name}
                      </div>
                      :""
                    )
                  )}

                   
                  </div>
                 
                  <div className="year-module-non-colour">
                    <label for="second-year-modules">Select your 2nd year modules: </label><br/>
                    {year_modules.map((item) => (
                        item.year === "2" ?<div key={item.university_program_modules_id}>
                        <input
                          name='year2'
                          value={item.university_program_modules_id}
                          type="checkbox"
                          onChange={handleModuleChange}
                        />
                        {item.university_module_name}
                      </div>
                      :""
                    )
                  )}
                    <br/> <br/>
                  </div>

                 
                  

                  <div className="year-module-colour">
                    <label for="third-year-modules">Select your 3rd year modules: </label><br/>
                    {year_modules.map((item) => (
                        item.year === "3" ?<div key={item.university_program_modules_id}>
                        <input
                          name='year3'
                          value={item.university_program_modules_id}
                          type="checkbox"
                          onChange={handleModuleChange}
                        />
                        {item.university_module_name}
                      </div>
                      :""
                    )
                  )}
                    <br/> <br/>
                  </div>

                  
                  
                  <div className="year-module-non-colour">
                    <label for="fourth-year-modules">Select your 4th year modules: </label><br/>
                    {year_modules.map((item) => (
                        item.year === "4" ?<div key={item.university_program_modules_id}>
                        <input
                          name='year4'
                          value={item.university_program_modules_id}
                          type="checkbox"
                          onChange={handleModuleChange}
                        />
                        {item.university_module_name}
                      </div>
                      :""
                    )
                  )}
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