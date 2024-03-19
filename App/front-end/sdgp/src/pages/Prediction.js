import React, { useEffect, useState } from 'react';
import NavBar from './commen/NavBar';
import { useNavigate } from "react-router-dom";

function Prediction() {

  const navigate = useNavigate();

  useEffect(() => {
    const user_session_value = window.sessionStorage.getItem("user_name");
    if (user_session_value === null || user_session_value === "") {
      navigate("/login");
    }
    // after user log, user's name will display on the prediction page "user name, please fill your details here"
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

  const [selected_program, setProgramId] = useState(0);

  const [pred, setPred] = useState([]);
  const [predProfile, setPredProfile] = useState([]);

  const handleModuleChange = (event) => {
    var module = event.target.value;
    var year = event.target.name;

    console.log(year)
    console.log(module)

    if (year === "year1") {
      if (first_year_modules.includes(module)) {
        setFirstYearModules(
          first_year_modules.filter((item) => item !== module)
        );
      } else {
        setFirstYearModules([...first_year_modules, module]);
      }
    }

    if (year === "year2") {
      if (second_year_modules.includes(module)) {
        setSecondYearModules(
          second_year_modules.filter((item) => item !== module)
        );
      } else {
        setSecondYearModules([...second_year_modules, module]);
      }
    }

    if (year === "year3") {
      if (third_year_modules.includes(module)) {
        setThirdYearModules(
          third_year_modules.filter((item) => item !== module)
        );
      } else {
        setThirdYearModules([...third_year_modules, module]);
      }
    }

    if (year === "year4") {
      if (fourth_year_modules.includes(module)) {
        setFourthYearModules(
          fourth_year_modules.filter((item) => item !== module)
        );
      } else {
        setFourthYearModules([...fourth_year_modules, module]);
      }
    }


  }

  const handleChange = (event) => {

    const { name, value } = event.target;
    setData({
      ...data_set,
      [name]: value,
    });
  };

  // this is a function call user details by user name. this function is used to take the relevant user's name to diaplay in the prediction page
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

      // here, set the relevant user's name
      setUserDetailsByUserName(data[0].user_first_name);


    } catch (error) {
      console.error('Error modules in:', error);

    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user_id = window.sessionStorage.getItem("user_id");
    const user_name = window.sessionStorage.getItem("user_name");

    const payLoad = {
      "user_name": user_name,
      "selected_program": selected_program,
      "first_year_modules": first_year_modules,
      "second_year_modules": second_year_modules,
      "third_year_modules": third_year_modules,
      "fourth_year_modules": fourth_year_modules
    }
    try {
      const response = await fetch('http://localhost:3001/api/prediction2/get/' + user_id, {
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
      console.log('pred', data);
      setPred(data)
    } catch (error) {
      console.error('Error modules in:', error);

    }

  };

  const handleSubmitProfilePred = async (event) => {
    event.preventDefault();
    const user_id = window.sessionStorage.getItem("user_id");
    try {
      const response = await fetch('http://localhost:3001/api/prediction1/get/' + user_id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Invalid');
      }

      const data = await response.json();
      console.log('pred', data);
      setPredProfile(data)
    } catch (error) {
      console.error('Error modules in:', error);

    }

  };

  const programSelect = async (event) => {
    setProgramId(event.target.value)
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
        <NavBar value={"prediction"} />
        <div className="width-100">
          <div className="width-50 prediction-image">
            <div className="prediction-img-content">
              <img src="Images/prediction-image.jpg" alt="#" />
            </div>
            <br /><br /><br />
            <div className="prediction-img-content2">
              <img src="Images/prediction-image.jpg" alt="#" />
            </div>
            <br />
          </div>
          <div className="width-50">
            <form onSubmit={handleSubmit}>
              <div className="detail-form">
                <div className="nav-padding">
                  <h2 className='head2'> {userDetailsByUserName_data}  Please fill your details here</h2>

                  <label for="degree-selector">Select you degree program: </label><br />
                  <select name="degree-program" onChange={programSelect}>
                    <option value="" >Please select an option</option>
                    {load_Degree_Programs.map((item) => (
                      <option key={item.university_program_id} value={item.university_program_id}> {item.university_program_name} </option>
                    ))}
                  </select>
                  <br /> <br />



                  <div className="year-module-colour">
                    <label for="first-year-modules"> <strong> Select your 1st year modules :  </strong> </label><br /><br />
                    {year_modules.map((item) => (
                      item.year === "1" ? <div key={item.university_program_modules_id} style={{ "width": "100%", "display": "inline-block" }}>
                        <div style={{ "float": "left", "padding": "19px", "min-width": "450px" }}>{item.university_module_name}</div>
                        <div style={{ "float": "left" }}><input
                          name='year1'
                          value={item.university_program_modules_id}
                          type="checkbox"
                          onChange={handleModuleChange}
                        /></div>
                      </div>
                        : ""
                    )
                    )}

<br /> <br />
                  </div>

                  <div className="year-module-non-colour">
                    <label for="second-year-modules"> <strong> Select your 2nd year modules: </strong> </label><br /><br />
                    {year_modules.map((item) => (
                      item.year === "2" ? <div key={item.university_program_modules_id} style={{ "width": "100%", "display": "inline-block" }}>
                        <div style={{ "float": "left", "padding": "19px", "min-width": "450px" }}>{item.university_module_name}</div>
                        <div style={{ "float": "left" }}><input
                          name='year2'
                          value={item.university_program_modules_id}
                          type="checkbox"
                          onChange={handleModuleChange}
                        /></div>
                      </div>
                        : ""
                    )
                    )}
                    <br /> <br />
                  </div>

                  <div className="year-module-colour">
                    <label for="third-year-modules">  <strong> Select your 3rd year modules: </strong> </label><br /><br />
                    {year_modules.map((item) => (
                      item.year === "3" ? <div key={item.university_program_modules_id} style={{ "width": "100%", "display": "inline-block" }}>
                        <div style={{ "float": "left", "padding": "19px", "min-width": "450px" }}>{item.university_module_name}</div>
                        <div style={{ "float": "left" }}><input
                          name='year3'
                          value={item.university_program_modules_id}
                          type="checkbox"
                          onChange={handleModuleChange}
                        /></div>
                      </div>
                        : ""
                    )
                    )}
                    <br /> <br />
                  </div>



                  <div className="year-module-non-colour">
                    <label for="fourth-year-modules"> <strong> Select your 4th year modules: </strong> </label><br /><br />
                    {year_modules.map((item) => (
                      item.year === "4" ? <div key={item.university_program_modules_id} style={{ "width": "100%", "display": "inline-block" }}>
                        <div style={{ "float": "left", "padding": "19px", "min-width": "450px" }}>{item.university_module_name}</div>
                        <div style={{ "float": "left" }}><input
                          name='year4'
                          value={item.university_program_modules_id}
                          type="checkbox"
                          onChange={handleModuleChange}
                        /></div>
                      </div>
                        : ""
                    )
                    )}
                    <br /> <br />
                  </div>


                  <div>
                    <ul>
                      {Object.entries(pred).map(([career, percentage]) => (
                        <li key={career} >
                          {career}: <span style={{ "color": "red" }}>{percentage}%</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="button-editor">
                    <div className="Submit-button">
                      <button className="button" type="SUBMIT">Prediction Based on Form Data</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div>
              <div>
                <ul>
                  {Object.entries(predProfile).map(([career, percentage]) => (
                    <li key={career} >
                      {career}: <span style={{ "color": "red" }}>{percentage}%</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="button-editor">
                <div className="Submit-button">
                  <button className="button" type="button" onClick={handleSubmitProfilePred}>Prediction Based on Your Profile</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Prediction;