import React, { useState } from "react";
import NavBar from "./commen/NavBar";

function Profile() {
  const [data_set, setData] = useState({
    fullName: "",
    universityEnrollYear: "",
    currentJobTitle: "",
    expectedJobRole: "",
  });
  

  const [first_year_modules, setFirstYearModules] = useState([]);
  const [second_year_modules, setSecondYearModules] = useState([]);
  const [third_year_modules, setThirdYearModules] = useState([]);
  const [fourth_year_modules, setFourthYearModules] = useState([]);

  const handleModuleChange = (year, module) => {
    if (year === 1) {
      if (first_year_modules.includes(module)) {
        setFirstYearModules(
          first_year_modules.filter((item) => item !== module)
        );
      } else {
        setFirstYearModules([...first_year_modules, module]);
      }
    }else if(year === 2){
        if(second_year_modules.includes(module)){
          setSecondYearModules(second_year_modules.filter(item => item !==module));         
        }else{
          setSecondYearModules([...second_year_modules, module]);
        }
    }else if(year === 3){
      if(third_year_modules.includes(module)){
        setThirdYearModules(third_year_modules.filter(item => item !== module));
      }else{
        setThirdYearModules([...third_year_modules, module]);
      }
    }else if(year === 4){
      if(fourth_year_modules.includes(module)){
        setFourthYearModules(fourth_year_modules.filter(item => item !== module));
      }else{
        setFourthYearModules([...fourth_year_modules, module]);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
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
                  <h2>Please fill your details here</h2>
                  <label for="User name ">Enter your full name: </label>
                  <br />
                  <input
                    placeholder="Enter your full name"
                    type="text"
                    name="fullName"
                    value={data_set.fullName}
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <label for="User name ">
                    Enter your university enrol year:{" "}
                  </label>
                  <br />
                  <input
                    placeholder="Enter your university enrol year"
                    type="text"
                    name="universityEnrollYear"
                    value={data_set.universityEnrollYear}
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <label for="User name ">
                    Select your first year modules:{" "}
                  </label>
                  <br />
                  {["SD 1", "Mathematics for Computing", "Trends in Computer Science", "SD 2", "Computer System Fundamentals", "Web Design and Development"].map(
                    (module) => (
                      <div key={module}>
                        <input
                          type="checkbox"
                          checked={first_year_modules.includes(module)}
                          onChange={() => handleModuleChange(1, module)}
                        />
                        {module}
                      </div>
                    )
                  )}

                  <br />
                  <br />
                  <label for="User name ">
                    Select your second year modules:{" "}
                  </label>
                  <br />
                  <br />
                  
                  {["Database Systems", "OOP", "SDGP", "Client-Side Architecture"].map(
                    (module) => (
                      <div key={module}>
                        <input
                          type="checkbox"
                          checked={second_year_modules.includes(module)}
                          onChange={() => handleModuleChange(2, module)}
                        />
                        {module}
                      </div>
                    )
                  )}                        

                  <br />
                  <br />
                  <label for="User name ">
                    Select your third year modules:{" "}
                  </label>
                  <br />
                  {["M_1", "M_2", "M_3", "M_4"].map(
                    (module) => (
                      <div key={module}>
                        <input
                          type="checkbox"
                          checked={third_year_modules.includes(module)}
                          onChange={() => handleModuleChange(3, module)}
                        />
                        {module}
                      </div>
                    )
                  )}

                  <br />
                  <br />
                  <label for="User name ">
                    Select your fourth year modules:{" "}
                  </label>
                  <br />
                  <br />
                  {["Final Year Project", "Applied AI", "Cyber Security", "Mobile Native Application Development"].map(
                    (module) => (
                      <div key={module}>
                        <input
                          type="checkbox"
                          checked={fourth_year_modules.includes(module)}
                          onChange={() => handleModuleChange(4, module)}
                        />
                        {module}
                      </div>
                    )
                  )}
                  <br />
                  <br />
                  <label for="User name ">Enter your current job title: </label>
                  <br />
                  <input
                    placeholder="Enter your current job title"
                    type="text"
                    name="currentJobTitle"
                    value={data_set.currentJobTitle}
                    onChange={handleChange}
                  />
                  <br />
                  <br />
                  <label for="User name ">Enter your expected job role: </label>
                  <br />
                  <input
                    placeholder="Enter your expected job role"
                    type="text"
                    name="expectedJobRole"
                    value={data_set.expectedJobRole}
                    onChange={handleChange}
                  />
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