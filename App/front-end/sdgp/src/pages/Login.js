import React, { useState } from "react";

function Login() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data_set);
  }
// This is a comment
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
