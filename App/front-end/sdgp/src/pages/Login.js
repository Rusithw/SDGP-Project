import React from 'react';

function Login() {
  return (
    <div className="main">
    <div className="sign-in-form form-style1">
      <div className="width-100">
          <div className="width-50">
              <div className="login-content">
                  <h2>Login</h2>
                  <p>Please fill this form to sign in</p>
                  <label for="User name ">User name: </label><br/>
                  <input placeholder="User name" type="text"name="username"/> <br/> <br/>
                  <label for="Password ">User Password: </label><br/>
                  <input placeholder="User Password" type="password"name="password"/> <br/> <br/> <br/>
                  <button className="button" type="button">Login</button>
                  <div className="sign-up-message">
                      <p>Don’t have any account yet?  <a href="create_acc.html"> Create an account </a></p>
                  </div>
              </div>
          </div>
        <div className="width-50 login-image">
          <div className="login-image-content">
              <img src="Images/login-image.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login;