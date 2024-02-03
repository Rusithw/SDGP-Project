import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [home_page, setHomePage] = useState("");
  const [prediction_page, setPredictionPage] = useState("");
  const [profile_page, setProfilePage] = useState("");
  const [program_details_page, setProgramDetailsPage] = useState("");
  const [about_us_page, setAboutUsPage] = useState("");
  const [my_account_page, setMyAccount] = useState("");

  // Created a Use Effect to active each pages
  useEffect(() => {
    if (props.value === "home") {
      setHomePage("active");
      setPredictionPage("");
      setProfilePage("");
      setProgramDetailsPage("");
      setAboutUsPage("");
      setMyAccount("");
    } else if (props.value === "prediction") {
      setPredictionPage("active");
      setHomePage("");
      setProfilePage("");
      setProgramDetailsPage("");
      setAboutUsPage("");
      setMyAccount("");
    } else if (props.value === "profile") {
      setProfilePage("active");
      setHomePage("");
      setPredictionPage("");
      setProgramDetailsPage("");
      setAboutUsPage("");
      setMyAccount("");
    }else if(props.value==="program-details"){
      setProgramDetailsPage("active");
      setHomePage("");
      setPredictionPage("");
      setProfilePage("");
      setAboutUsPage("");
      setMyAccount("");
    }else if(props.value==="about_us"){
      setAboutUsPage("active");
      setProgramDetailsPage("");
      setHomePage("");
      setPredictionPage("");
      setProfilePage("");
      setMyAccount("");
    }else if(props.value==="my-account"){
      setMyAccount("active");
      setAboutUsPage("");
      setProgramDetailsPage("");
      setHomePage("");
      setPredictionPage("");
      setProfilePage("");
    }

  }, [props]);
  
  // here added a function call logOut. if a user click this log out button it will locate to the login again. clear window.session storage and reload page to login
  const logOut = ()=>{
    window.sessionStorage.clear();
    window.location.reload();
  }

  return (
    <div className="nav-bar">
      <div className="logout-button-content">
        {/* logout button creates and logout function call */}
        <button className="Log-out" onClick={logOut}> Log Out </button>
      </div>
      <ul>
        <li>
          {" "}
          
          {/* Linked the route path for home_page */}
          <Link to={"/"} className={home_page}>
            Home
          </Link>{" "}
        </li>
        <li>
          {" "}

          {/* Linked the route path for prediction_page */}
          <Link to={"/prediction"} className={prediction_page}>
            Prediction
          </Link>{" "}
        </li>
        <li>
          {" "}

          {/* Linked the route path for profile_page */}
          <Link to={"/Profile"} className={profile_page}>
            Profile
          </Link>
        </li>
        <li>
          {" "}

          {/* Linked the route path for program_details_page */}
          <Link to={"/program-details"} className={program_details_page}>
            Program-Details
          </Link>{" "}
        </li>
        <li>
          {" "}

          {/* Linked the route path for about_us_page */}
          <Link to={"/about-us"} className={about_us_page}>
            About Us
          </Link>{" "}
        </li>
        <li>
          {" "}

          {/* Linked the route path for my_account_page */}
          <Link to={"/my-account"} className={my_account_page}>
            My Account
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
