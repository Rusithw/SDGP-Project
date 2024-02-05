import React, { useEffect, useState } from "react";
import NavBar from "./commen/NavBar";
import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  useEffect(() => {
   const user_session_value =  window.sessionStorage.getItem("user_name");
   if(user_session_value === null){
    navigate("/login");
   }
   }, []);

   useEffect(() => {
      loadDegreePrograms();
      loadProfileData(window.sessionStorage.getItem("user_id"));
    }, []);

   const [data_set, setData] = useState({
    enrolement_date: "",
    university_program_id: "",
    enrolement_status: "",
    user_id: window.sessionStorage.getItem("user_id")
   })

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
    const name = event.target.name;
    const value = event.target.value;
    setData({...data_set, [name]: value,})
    console.log(value)
   }

   const programSelectChange = (event) => {
    setData({
      ...data_set,
      ["university_program_id"]: event.target.value,

    });

    getModules(event.target.value);

   }
   
   const handleSubmit = async (event) =>{
    event.preventDefault();
    console.log(first_year_modules, second_year_modules, third_year_modules, fourth_year_modules);

    try {
      const response = await fetch('http://localhost:3001/api/profileDataSave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_set),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      console.log(data);

      for(let i=0; first_year_modules.length>i;i++){
        dataSaveModules(data, first_year_modules[i]);
      }
      for(let i=0; second_year_modules.length>i;i++){
        dataSaveModules(data, second_year_modules[i]);
      }
      for(let i=0; third_year_modules.length>i;i++){
        dataSaveModules(data, third_year_modules[i]);
      }
      for(let i=0; fourth_year_modules.length>i;i++){
        dataSaveModules(data, fourth_year_modules[i]);
      }
    
    } catch (error) {
      console.error('Error handleSubmit in:', error);  
    }
  };

  const dataSaveModules = async (enrolement_id, university_program_modules_id) => {
    const payLoad = {
      "enrolement_id": enrolement_id,
      "university_program_modules_id": university_program_modules_id,
    }
    try {
      const response = await fetch('http://localhost:3001/api/dataSaveModules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payLoad),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data= await response.json();
      console.log(data);

     
    
    } catch (error) {
      console.error('Error dataSaveModules in:', error);  
    }
  }

   const [load_Degree_Programs, setLoadDegreePrograms] = useState([]);

   
   const getModules = async (university_program_id) => {
    const payLoad = {
      "university_program_id": university_program_id
     }
    try {
      const response = await fetch("http://localhost:3001/api/getModules", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payLoad),
      });
      if (!response.ok) {
        throw new Error("API Error");
      }
      const api_data = await response.json();
      setYearModules(api_data)
      console.log(api_data)
    } catch (error) {
      
    }
   }


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
      setLoadDegreePrograms(data)
      console.log(data)
    } catch (error) {
      
    }
   }

   const loadProfileData = async (user_id) =>{
    const payLoad = {
      "user_id": user_id
     }
    try {
      const response = await fetch("http://localhost:3001/api/loadProfileData", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payLoad),
      });
      if (!response.ok) {
        throw new Error("API Error");
      }
      const api_data = await response.json();
      console.log(api_data)

      const new_data_set = {
        enrolement_date: api_data[0].enrolement_date,
        university_program_id: api_data[0].university_program_id,
        enrolement_status: api_data[0].enrolement_status,
        user_id: window.sessionStorage.getItem("user_id")
       }
      setData(new_data_set);
      getModules(api_data[0].university_program_id);
    } catch (error) {
           
    }
   }
   
   const checkbox_valid = () =>{
    return true;
   }


  return (
    <div className="main">
      <div>
        <NavBar value={"profile"} />
        <div className="width-100">
          <div className="width-50 profile-image">
            <div className="profile-img-content">
              <img src="Images/login-image.jpg" alt="#" />
            </div>
          </div>
          <div className="width-50">
            <form onSubmit={handleSubmit}>
              <div className="detail-form">
                <div className="nav-padding">
                  <h2> Please fill your details here </h2>
                  <label for="User name ">
                    Enter your university enrol year:{" "}
                  </label>
                  <br />
                  <input
                    placeholder="Enter your university enrol year"
                    type="text"
                    name="enrolement_date"
                    value = {data_set.enrolement_date}
                    onChange={handleChange}
                
                  />
                  <br />
                  <br />

                  <label for="status">Select your enrolment status: </label>
          <select name="enrolement_status" value= {data_set.enrolement_status} onChange={handleChange} >
            <option value="">Please select an option</option>
            <option value="On going">On Going</option>
            <option value="Done">Done</option>
            <option value="Cancel">Cancel</option>
          </select>

          <br /> <br />

          <label for="degree-selector">Select your degree program: </label><br />
          <select name="degree" value={data_set.university_program_id} onChange={programSelectChange} >
          <option value="" >Please select an option</option>
          {load_Degree_Programs.map((item) => (
            <option key={item.university_program_id} value={item.university_program_id}> {item.university_program_name} </option>
        ))}
          </select>
      
         
          <br /> <br />       
                  <label for="User name ">
                    Select your first year modules:{" "}
                  </label>
                  {year_modules.map((item) => (
                        item.year === "1" ?<div key={item.university_program_modules_id}>
                        <input
                          name="year1"
                          checked={checkbox_valid()}
                          value={item.university_program_modules_id}
                          type="checkbox"
                          onChange= {handleModuleChange}
                        />
                        {item.university_module_name}
                      </div>
                      :""
                    )
                  )}


                  <br />
                

                  <br />
                  <br />
                  <label for="User name ">
                    Select your second year modules:{" "}
                  </label>
                  {year_modules.map((item) => (
                        item.year === "2" ?<div key={item.university_program_modules_id}>
                        <input
                          name="year2"
                          value={item.university_program_modules_id}
                          type="checkbox"
                          onChange={handleModuleChange}
                        />
                        {item.university_module_name}
                      </div>
                      :""
                    )
                  )}
                  <br />
                  <br />
                  
                                      

                  <br />
                  <br />
                  <label for="User name ">
                    Select your third year modules:{" "}
                  </label>
                  {year_modules.map((item) => (
                        item.year === "3" ?<div key={item.university_program_modules_id}>
                        <input
                          name="year3"
                          value={item.university_program_modules_id}
                          type="checkbox"
                          onChange={handleModuleChange}
                        />
                        {item.university_module_name}
                      </div>
                      :""
                    )
                  )}
                  <br />
                 

                  <br />
                  <br />
                  <label for="User name ">
                    Select your fourth year modules:{" "}
                  </label>
                  {year_modules.map((item) => (
                        item.year === "4" ?<div key={item.university_program_modules_id}>
                        <input
                          name="year4"
                          value={item.university_program_modules_id}
                          type="checkbox"
                          onChange={handleModuleChange}
                        />
                        {item.university_module_name}
                      </div>
                      :""
                    )
                  )}
                  <br />
                  <br />
                  
                  

                  <br />
                  <br />
                  {/* <label for="User name ">Enter your current job title: </label>
                  <br />
                  <input
                    placeholder="Enter your current job title"
                    type="text"
                    name="currentJobTitle"
                    value={data_set.currentJobTitle}
                    onChange={handleChange}
                  /> */}
                  <br />
                  <br />
                  {/* <label for="User name ">Enter your expected job role: </label>
                  <br />
                  <input
                    placeholder="Enter your expected job role"
                    type="text"
                    name="expectedJobRole"
                    value={data_set.expectedJobRole}
                    onChange={handleChange}
                  /> */}
                  <br />
                  <br />
                  <div className="save-button">
                    <button className="button" type="Save">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;