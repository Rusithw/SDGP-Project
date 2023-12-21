import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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

  const handleSubmit = async (event) => {
    event.preventDefault()
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
        console.log(data);
        if(data==="0"){
          setError("Wrong user name or password");
        }else{

          setError("Ok");
          window.sessionStorage.setItem("user_name", data_set.userName);
          navigate("/");
        }
      
      } catch (error) {
        console.error('Error logging in:', error);
      
      }
    };

  return (
    <div className="main">
      <div className="sign-in-form form-style1">
        <div className="width-100">
          <form onSubmit={handleSubmit}>
          <div className="width-50">
            <div className="login-content">
              <h2>Login</h2>
              <p>Please fill this form to sign in</p>
              <label for="User name ">User name: </label>
              <br />
              <input placeholder="User name" type="text" name="userName" value={data_set.userName} onChange={handleChange}/>{" "}
              <br /> <br />
              <label for="Password ">User Password: </label>
              <br />
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
                  <a href="create_acc.html"> Create an account </a>
                </p>
              </div>
            </div>
          </div>

          </form>
          <div className="width-50 login-image">
            <div className="login-image-content">
              <img src="Images/login-image.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
