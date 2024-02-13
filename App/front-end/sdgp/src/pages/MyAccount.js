import React, { useEffect, useState } from 'react';
import NavBar from "./commen/NavBar";

function MyAccount() {

  const user_id = 6;

  const [ reTypePassword, setRetypePassword] = useState("")
  const [data_set, setData] = useState({
      user_first_name: "",
      user_last_name: "",
      user_name: "",
      user_email: "",
      user_password: "",
      user_mobile: "",
      user_address: "",
      city_id: "",
  });

  // After calling the method  getUser() the user details are loaded when the user enters My Account page.
  useEffect(()=> {
    getUser();
  }, [])

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setData({
      ...data_set,
      [name]: value,
    });
  };

  const handleSubmit = async (event) =>{
    event.preventDefault();
  

    try {
      const response = await fetch('http://localhost:3001/api/user/signup', {
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
      if(data==="0"){
        // setError("Wrong user name or password")
      }else{
        // setError("Ok");
      }
    
    } catch (error) {
      console.error('Error logging in:', error);
    
    }

  };

  // This method getUser is used to get the data from the back-end using a response according to user_id and is fetched into a variable api_data, then it is passed into the setData.
  const getUser = async () =>{
    const get_user_id = {user_id: user_id}
    try {
      const response = await fetch("http://localhost:3001/api/getUser", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(get_user_id),
      });
      if (!response.ok) {
        throw new Error("API Error");
      }
      const api_data = await response.json();
      setData(api_data)
      console.log(api_data)
    } catch (error) {
      
    }
  }

  return (
    <div className="main">
    <div>
      <NavBar value={"my-account"} />
      <div className="sign-up-form form-style1">
      <div className="width-100">
       <form onSubmit={handleSubmit}>
       <div className="width-50">
          <div className="login-content">
            <h2>My Account</h2>
            <label for="User name ">First name: </label><br />
            <input placeholder="First name" type="text" name="user_first_name" value={data_set.user_first_name} onChange={handleChange}/> <br />{" "}
            <br />
            <label for="User name ">Last name: </label><br />
            <input placeholder="Last name" type="text" name="user_last_name" value={data_set.user_last_name} onChange={handleChange}/> <br />
            <br />
            <label for="User name ">User name: </label><br />
            <input placeholder="User name" type="text" name="user_name" value={data_set.user_name} onChange={handleChange}/> <br />
            <br />
            <label for="User name ">Email: </label><br />
            <input placeholder="Email" type="text" name="user_email" value={data_set.user_email} onChange={handleChange}/> <br />
            <br />
            <label for="Password ">Password: </label><br />
            <input placeholder="Password" type="password" name="user_password" value={data_set.user_password} onChange={handleChange}/> <br />
            <br />
            <label for="Password ">Re-type Password: </label><br />
            <input placeholder="Re-type Password" type="password" name="reTypePassword" value={reTypePassword} onChange={handleChange}/> <br />
            <br />
            <label for="Password ">Mobile: </label><br />
            <input placeholder="Mobile" type="text" name="user_mobile" value={data_set.user_mobile} onChange={handleChange}/> <br />
            <br />
            <label for="Password ">Address: </label><br />
            <input placeholder="Address" type="text" name="user_address" value={data_set.user_address} onChange={handleChange}/> <br />
            <br/>
            <label for="Password ">City: </label><br />
           
            <select name="city_id" onChange={handleChange}>
              <option value="0" disabled="">Select City</option>
              <option value="1">Negombo</option>
            </select>
          
            <br />
            <br />
            <button className="button" type="Update">Update</button>
            
          </div>
        </div>

       </form>
        <div className="width-50 my-account-image">
          <div className="my-account-image-content">
            <img src="Images/login-image.jpg" alt="#" />
          </div>
        </div>
      </div>
    </div>

      </div>  


  </div>

  )
}

export default MyAccount;