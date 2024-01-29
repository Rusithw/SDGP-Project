import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateAccount() {

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
    
    } catch (error) {
      console.error('Error logging in:', error);
    
    }

  };

  return (
    <div className="main">
    <div className="sign-up-form form-style1">
      <div className="width-100">
       <div className='jumbotron'>
       <h1>Career <span>Predictor</span></h1>
       <marquee behavior="slow" direction="to-left"><p>For a Better Future...</p></marquee>
        <br /><br /><br />
        <img src="https://png.pngtree.com/png-vector/20230520/ourmid/pngtree-graduation-silhouette-with-black-color-vector-png-image_7102342.png" alt="" />
       </div>
       <form onSubmit={handleSubmit}>
       <div className="width-50">
          <div className="login-content">
            <h2> <span> Sign up here </span></h2>
            <p>Please fill this form to sign up</p>
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
            <input placeholder="Re-type Password" type="password" name="reTypePassword"/> <br />
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
            <button className="button" type="Login">Sign Up</button>
            <div className="login-message">
              <p>Already have an account? <Link to={"/login"} > Sign in </Link></p>
            </div>
          </div>
        </div>

       </form>
        <div className="width-50 login-image">
          <div className="login-image-content">
            <img src="Images/login-image.jpg" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default CreateAccount;