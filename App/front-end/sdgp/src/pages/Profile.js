import React from 'react';
import NavBar from './commen/NavBar';

function Profile() {
  return (
    <div className="main">
    <div>
     <NavBar/>
     <div className="width-100">
      <div className="width-50 profile-image">
          <div className="profile-img-content">
              <img src="Images/login-image.jpg" alt="#"/>
          </div>
      </div>
      <div className="width-50">
          <div className="detail-form">
              <div className="nav-padding">
                <h2>Please fill your details here</h2>
                <label for="User name ">Enter your full name: </label><br />
                <input
                  placeholder="Enter your full name"
                  type="text"
                  name="fullname"
                />
                <br />
                <br />
                <label for="User name ">Enter your university enrol year: </label
                ><br />
                <input
                  placeholder="Enter your university enrol year"
                  type="text"
                  name="enrolyear"
                />
                <br />
                <br />
                <label for="User name ">Enter your university enrol year: </label
                ><br />
                <input
                  placeholder="Enter your university enrol year"
                  type="text"
                  name="enrolyear"
                />
                <br />
                <br />
                <label for="User name ">Select your first year modules: </label
                ><br />
                <select name="modules">
                  <option value="volvo=">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                <br />
                <br />
                <label for="User name ">Select your second year modules: </label
                ><br />
                <select name="modules">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                <br />
                <br />
                <label for="User name ">Select your third year modules: </label
                ><br />
                <select name="modules">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                <br />
                <br />
                <label for="User name ">Select your fourth year modules: </label
                ><br />
                <select name="modules">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
                <br/>
                <br />
                <label for="User name ">Enter your current job title: </label><br />
                <input
                  placeholder="Enter your current job title"
                  type="text"
                  name="jobtitle"
                />
                <br />
                <br />
                <label for="User name ">Enter your expected job role: </label><br />
                <input
                  placeholder="Enter your expected job role"
                  type="text"
                  name="expectedjobrole"
                />
                <br />
                <br />
                <div className="save-button">
                  <button className="button" type="button">Save</button>
                </div>
              </div>
            </div>
      </div>
     
     </div>
    </div>
  </div>
  )
}

export default Profile;