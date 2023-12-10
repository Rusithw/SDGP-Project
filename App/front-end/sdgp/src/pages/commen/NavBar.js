import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [home_page, setHomePage] = useState("");
  const [prediction_page, setPredictionPage] = useState("");
  const [profile_page, setProfilePage] = useState("");
  const [program_details_page, setProgramDetailsPage] = useState("");
  const [about_us_page, setAboutUsPage] = useState("");
  const [my_account_page, setMyAccount] = useState("");

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

  return (
    <div className="nav-bar">
      <ul>
        <li>
          {" "}
          <Link to={"/"} className={home_page}>
            Home
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/prediction"} className={prediction_page}>
            Prediction
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/Profile"} className={profile_page}>
            Profile
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"/program-details"} className={program_details_page}>
            Program-Details
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/about-us"} className={about_us_page}>
            AboutUS
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/my-account"} className={my_account_page}>
            My Account
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
