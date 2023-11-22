import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const [home_page, setHomePage] = useState("");
  const [prediction_page, setPredictionPage] = useState("");
  const [profile_page, setProfilePage] = useState("");
  const [program_details_page, setProgramDetailsPage] = useState("");
  const [about_us_page, setAboutUsPage] = useState("");

  useEffect(() => {
    if (props.value === "home") {
      setHomePage("active");
      setPredictionPage("");
      setProfilePage("");
      setProgramDetailsPage("");
      setAboutUsPage("");
    } else if (props.value === "prediction") {
      setPredictionPage("active");
      setHomePage("");
      setProfilePage("");
      setProgramDetailsPage("");
      setAboutUsPage("");
    } else if (props.value === "profile") {
      setProfilePage("active");
      setHomePage("");
      setPredictionPage("");
      setProgramDetailsPage("");
      setAboutUsPage("");
    }else if(props.value==="program-details"){
      setProgramDetailsPage("active");
      setHomePage("");
      setPredictionPage("");
      setProfilePage("");
      setAboutUsPage("");
    }else{
      setAboutUsPage("active");
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
      </ul>
    </div>
  );
}

export default NavBar;
