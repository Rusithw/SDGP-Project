import React, { useEffect, useState } from 'react';
import NavBar from "./commen/NavBar";

function MyAccount() {

  // Here get user_id from session storage so that relevent user can view the loaded data according to user id.
  const user_id = (window.sessionStorage.getItem("user_id"));

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
  // After calling the getCities method the city names are loaded when user enters the my account page.
  useEffect(()=> {
    getUser();
    getCities();

  }, [])

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setData({
      ...data_set,
      [name]: value,
    });
  };

  const [load_cities, setCities] = useState([]);


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
   
    } catch (error) {
      
    }
  }

  // This method is used to update the users. If a user need to change certain details that user can easily update their details.
  const updateUser = async ()=> {
    const id = user_id;
    try {
      const response = await fetch("http://localhost:3001/api/updateUser/" + id, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data_set),
      });
      if (!response.ok) {
        throw new Error("API Error");
      }
      const api_data = await response.json();
      alert(api_data.message)
    } catch (error) {
      
    }
  }

  // The cities are loaded from the database.
  const getCities = async()=>{
    try {
      const response = await fetch("http://localhost:3001/api/getCities", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error("API Error");
      }
      const api_data = await response.json();
      setCities(api_data)
   
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
            <div className='logo-content'>
            <h1> My Account  </h1>
            </div> <br/><br/>
            
            <label for="first name ">First name: </label><br />
            <input placeholder="First name" type="text" name="user_first_name" value={data_set.user_first_name} onChange={handleChange}/> <br />{" "}
            <br />
            <label for="last name ">Last name: </label><br />
            <input placeholder="Last name" type="text" name="user_last_name" value={data_set.user_last_name} onChange={handleChange}/> <br />
            <br />
            <label for="User name ">User name: </label><br />
            <input placeholder="User name" type="text" name="user_name" value={data_set.user_name} onChange={handleChange}/> <br />
            <br />
            <label for="Email ">Email: </label><br />
            <input placeholder="Email" type="text" name="user_email" value={data_set.user_email} onChange={handleChange}/> <br />
            <br />
            <label for="Password ">Password: </label><br />
            <input placeholder="Password" type="password" name="user_password" value={data_set.user_password} onChange={handleChange}/> <br />
            <br />
            <label for="Re-type Password ">Re-type Password: </label><br />
            <input placeholder="Re-type Password" type="password" name="reTypePassword" value={reTypePassword} onChange={handleChange}/> <br />
            <br />
            <label for="Mobile">Mobile: </label><br />
            <input placeholder="Mobile" type="text" name="user_mobile" value={data_set.user_mobile} onChange={handleChange}/> <br />
            <br />
            <label for="Address ">Address: </label><br />
            <input placeholder="Address" type="text" name="user_address" value={data_set.user_address} onChange={handleChange}/> <br />
            <br/>


            <label for="city">City: </label><br />
          <select name="city_id" value={data_set.city_id} onChange={handleChange} >
          <option value="" >Select City</option>
          {load_cities.map((item) => (
            <option key={item.city_id} value={item.city_id}> {item.city_name} </option>
        ))}
          </select>
          
            <br />
            <br />
            <button className="button" onClick={updateUser} type="Update">Update</button>
            
          </div>
        </div>

       </form>
        <div className="width-50 my-account-image">
          <div className="my-account-image-content2">
             <img src="Images/my-acc-ori.jpeg" alt="#" />
             <h2>----- Customize your account -----</h2>
             <img src="Images/my-acc-2.jpeg" alt="#" />
          </div>
        </div>
      </div>
    </div>

      </div>  


  </div>

  )
}

export default MyAccount;