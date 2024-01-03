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
    }, []);

   const [data, setData] = useState({
    enrolement_date: "",
    university_program_id: "",
    enrolement_status: "",
   })

   const [year_modules, setYearModules] = useState([]);
   const [first_year_modules, setFirstYearModules] = useState([]);
   const [second_year_modules, setSecondYearModules] = useState([]);
   const [third_year_modules, setThirdYearModules] = useState([]);
   const [fourth_year_modules, setFourthYearModules] = useState([]);

   
   
   const handleModuleChange = (event) => {
   }

   const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({...data, [name]: value,})
    console.log(value)
   }

   const programSelectChange = (event) => {
    setData({
      ...data,
      ["university_program_id"]: event.target.value,

    });

    getModules(event.target.value);

   }
   
   const handleSubmit = (event) => {
    event.preventDefault();
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
                    value = {data.enrolement_date}
                    onChange={handleChange}
                
                  />
                  <br />
                  <br />

                  <label for="status">Select your enrolment status: </label>
          <select name="enrolement_status" value= {data.enrolement_status} onChange={handleChange} >
            <option value="">Please select an option</option>
            <option value="On going">On Going</option>
            <option value="Done">Done</option>
            <option value="Cancel">Cancel</option>
          </select>

          <br /> <br />

          <label for="degree-selector">Select your degree program: </label><br />
          <select name="degree" onChange={programSelectChange} >
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