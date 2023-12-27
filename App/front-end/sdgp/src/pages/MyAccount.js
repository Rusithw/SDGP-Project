import React, { useEffect, useState } from "react";
import NavBar from "./commen/NavBar";
import { useNavigate } from "react-router-dom";

function MyAccount() {

  const navigate = useNavigate();

  useEffect(() => {
   const user_session_value =  window.sessionStorage.getItem("user_name");
   if(user_session_value === null || user_session_value === ""){
    navigate("/login");
   }
  //  test comment

  }, []);

  const [data_set, setData] = useState({
    fullName: "",
    universityEnrollYear: "",
    firstYearModuleSelect: "",
    secondYearModuleSelect: "",
    thirdYearModuleSelect: "",
    fourthYearModuleSelect: "",
    currentJobTitle: "",
    expectedJobRole: "",
  });

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
        <NavBar value={"my-account"} />
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
                  <select name="firstYearModuleSelect" onChange={handleChange}>
                    <option value="select=">First year module select </option>
                    <option value="volvo=">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                  <br />
                  <br />
                  <label for="User name ">
                    Select your second year modules:{" "}
                  </label>
                  <br />
                  <select name="secondYearModuleSelect" onChange={handleChange}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                  <br />
                  <br />
                  <label for="User name ">
                    Select your third year modules:{" "}
                  </label>
                  <br />
                  <select name="thirdYearModuleSelect" onChange={handleChange}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                  <br />
                  <br />
                  <label for="User name ">
                    Select your fourth year modules:{" "}
                  </label>
                  <br />
                  <select name="fourthYearModuleSelect" onChange={handleChange}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
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

export default MyAccount;
