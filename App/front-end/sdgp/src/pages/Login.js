import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { ThreeDots} from 'react-loader-spinner';
import './Login.css';

// Welcome to the Career Prediction System, where you can create your own university profile and get predictions based on the modules you have selected in profile or make your own customized predictions by making informed module selections.


function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [data_set, setData] = useState({
    userName: "",
    userPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data_set,
      [name]: value,
    });
  };

  const [loader, setLoader]  = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoader(true)
      try {
        const response = await fetch('http://localhost:3001/api/user/login', {
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
        console.log(data_set);
        if(data==="0"){
          // Applied User Login Error Massage for Login Page
          NotificationManager.error('Login Fail', 'Oops...!');
          setLoader(false)
          window.sessionStorage.setItem("user_name", "");
        }else{

          // Applied User Login Success Message for Login Page
          // Here, In The Success Message Display The Relavent User 
          NotificationManager.success(data_set.userName,  'Welcome');
          setLoader(true)
          setTimeout(() => {
            // If the user name & password success user will navigate to the dashboard. Below navigate path
            navigate("/");
          }, 2000);
          window.sessionStorage.setItem("user_name", data_set.userName);
          window.sessionStorage.setItem("user_id", data);
          
        }
      
      } catch (error) {
        console.error('Error logging in:', error);
      
      }
    };

  return (
    
    <div className="main">
      {/* Added loader-spinner for Login Page */}
        <ThreeDots
    visible={loader}
    height="80"
    width="80"
    color="#0066ff"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />

      <div className="sign-in-form form-style1">
        <div className="width-100">
          <div className="jumbotron">
              <h1>Career <span>Predictor</span></h1> 
              <marquee behavior="slow" direction="to-left"><p>For a Better Future...</p></marquee>
              <br /><br /><br />
              <img src="https://png.pngtree.com/png-vector/20230520/ourmid/pngtree-graduation-silhouette-with-black-color-vector-png-image_7102342.png" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
          <div className="width-50">
            <div className="login-content">
              <h2><span>Login</span></h2>
              <p><i>Please fill this form to sign in</i> </p>
              <label for="User name ">User name: </label>
              <br /><br />
              <input placeholder="User name" type="text" name="userName" value={data_set.userName} onChange={handleChange}/>{" "}
              <br /> <br />
              <label for="Password ">User Password: </label>
              <br /><br />
              <input
                placeholder="User Password"
                type="password"
                name="userPassword"
                value={data_set.userPassword}
                onChange={handleChange}
              />{" "}
              <br /> <br /> <br />
              <div className="error">
                  {[error]}
              </div>
              <button className="button" type="Login">
                Login
              </button>
              <div className="sign-up-message">
                <p>
                  Don’t have any account yet?{" "}
                  {/* Linked to the Create Account Page form Login Page */}
                  <Link to={"/create-account"} > Create an account</Link>
                </p>
              </div>
            </div>
          </div>

          </form>
          <div className="width-50 login-image">
            <div className="login-image-content">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
      
 <NotificationContainer/>
    </div>
  );
}

export default Login;
