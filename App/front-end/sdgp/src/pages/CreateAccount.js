import React, { useState } from 'react';

function CreateAccount() {

  const [data_set, setData] = useState({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      reTypePassword: "",
      mobile: "",
      address: "",
      city: "",
  });

  const handleChange = (event) =>{
    const {name, value} = event.target;
    setData({
      ...data_set,
      [name]: value,
    });
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(data_set);
  };

  return (
    <div className="main">
    <div className="sign-up-form form-style1">
      <div className="width-100">
       <form onSubmit={handleSubmit}>
       <div className="width-50">
          <div className="login-content">
            <h2>Sign up here</h2>
            <p>Please fill this form to sign up</p>
            <label for="User name ">First name: </label><br />
            <input placeholder="First name" type="text" name="firstName" value={data_set.firstName} onChange={handleChange}/> <br />{" "}
            <br />
            <label for="User name ">Last name: </label><br />
            <input placeholder="Last name" type="text" name="lastName" value={data_set.lastName} onChange={handleChange}/> <br />
            <br />
            <label for="User name ">User name: </label><br />
            <input placeholder="User name" type="text" name="userName" value={data_set.userName} onChange={handleChange}/> <br />
            <br />
            <label for="User name ">Email: </label><br />
            <input placeholder="Email" type="text" name="email" value={data_set.email} onChange={handleChange}/> <br />
            <br />
            <label for="Password ">Password: </label><br />
            <input placeholder="Password" type="password" name="password" value={data_set.password} onChange={handleChange}/> <br />
            <br />
            <label for="Password ">Re-type Password: </label><br />
            <input placeholder="Re-type Password" type="password" name="reTypePassword" value={data_set.reTypePassword} onChange={handleChange}/> <br />
            <br />
            <label for="Password ">Mobile: </label><br />
            <input placeholder="Mobile" type="text" name="mobile" value={data_set.mobile} onChange={handleChange}/> <br />
            <br />
            <label for="Password ">Address: </label><br />
            <input placeholder="Address" type="text" name="address" value={data_set.address} onChange={handleChange}/> <br />
            <br/>
            <label for="Password ">City: </label><br />
           
            <select name="city" onChange={handleChange}>
              <option value="0" disabled="">Select City</option>
              <option value="52">Akkarepattu</option>
              <option value="9">Akuressa</option>
              <option value="21">Ambalangoda</option>
              <option value="67">Ambalantota</option>
              <option value="51">Ampara</option>
              <option value="13">Anuradhapura</option>
              <option value="98">Attidiya</option>
              <option value="24">Baddegama</option>
              <option value="82">Badulla</option>
              <option value="48">Balangoda</option>
              <option value="6">Bandaragama</option>
              <option value="83">Bandarawela</option>
              <option value="103">Battaramulla</option>
              <option value="25">Batticaloa</option>
              <option value="64">Beliatta</option>
              <option value="34">Bibile</option>
              <option value="32">Buttala</option>
              <option value="57">Chavakachcheri</option>
              <option value="72">Chilaw</option>
              <option value="106">Colombo</option>
              <option value="27">Dambulla</option>
              <option value="88">Dehiwala</option>
              <option value="11">Dikwella</option>
              <option value="50">Eheliyagoda</option>
              <option value="22">Elpitiya</option>
              <option value="47">Embilipitiya</option>
              <option value="17">Eppawala</option>
              <option value="28">Galewela</option>
              <option value="20">Galle</option>
              <option value="92">Gampaha</option>
              <option value="43">Gampola</option>
              <option value="70">Ginigathena</option>
              <option value="12">Hakmana</option>
              <option value="86">Hali Ela</option>
              <option value="66">Hambantota</option>
              <option value="69">Hatton</option>
              <option value="23">Hikkaduwa</option>
              <option value="37">Hingurakgoda</option>
              <option value="104">Homagama</option>
              <option value="3">Horana</option>
              <option value="96">Ja-Ela</option>
              <option value="55">Jaffna</option>
              <option value="95">Kadawatha</option>
              <option value="38">Kaduruwela</option>
              <option value="53">Kalmunai</option>
              <option value="2">Kalutara</option>
              <option value="41">Kandy</option>
              <option value="35">Kataragama</option>
              <option value="42">Katugastota</option>
              <option value="77">Kegalle</option>
              <option value="14">Kekirawa</option>
              <option value="94">Kelaniya</option>
              <option value="40">Kilinochchi</option>
              <option value="19">Kinniya</option>
              <option value="105">Kottawa</option>
              <option value="59">Kuliyapitiya</option>
              <option value="45">Kundasale</option>
              <option value="58">Kurunegala</option>
              <option value="71">Madulla</option>
              <option value="90">Maharagama</option>
              <option value="85">Mahiyanganaya</option>
              <option value="97">Mannar</option>
              <option value="76">Marawila</option>
              <option value="26">Matale</option>
              <option value="8">Matara</option>
              <option value="102">Mathugama</option>
              <option value="5">Matugama</option>
              <option value="78">Mawanella</option>
              <option value="62">Mawathagama</option>
              <option value="16">Medawachchiya</option>
              <option value="39">Medirigiriya</option>
              <option value="31">Moneragala</option>
              <option value="101">Moratuwa</option>
              <option value="100">Mount Lavinia</option>
              <option value="7">Mullativu</option>
              <option value="56">Nallur</option>
              <option value="60">Narammala</option>
              <option value="75">Nattandiya</option>
              <option value="Negombo">Negombo</option>
              <option value="89">Nugegoda</option>
              <option value="68">Nuwara Eliya</option>
              <option value="4">Panadura</option>
              <option value="61">Pannala</option>
              <option value="49">Pelmadulla</option>
              <option value="44">Peradeniya</option>
              <option value="91">Piliyandala</option>
              <option value="36">Polonnaruwa</option>
              <option value="74">Puttalam</option>
              <option value="87">Rajagiriya</option>
              <option value="80">Rambukkana</option>
              <option value="99">Rathmalana</option>
              <option value="46">Ratnapura</option>
              <option value="30">Rattota</option>
              <option value="81">Ruwanwella</option>
              <option value="54">Sainthamaruthu</option>
              <option value="15">Tambuttegama</option>
              <option value="63">Tangalla</option>
              <option value="65">Tissamaharama</option>
              <option value="18">Trincomalee</option>
              <option value="29">Ukuwela</option>
              <option value="1">Vavuniya</option>
              <option value="79">Warakapola</option>
              <option value="10">Weligama</option>
              <option value="84">Welimada</option>
              <option value="33">Wellawaya</option>
              <option value="73">Wennappuwa</option>
            </select>
          
            <br />
            <br />
            <button Name="button" type="Login">Login</button>
            <div className="login-message">
              <p>Already have an account? <a href="Login.html"> Sign in </a></p>
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