import React, { useEffect } from "react";
import classes from "../css/Dashboard.module.css";
import { useNavigate } from "react-router-dom";


const Welcome = ({ message }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const time = localStorage.getItem("timeOfLogin");
    if (!time || Date.now() - time > 3600000) {
      localStorage.clear();
      navigate("/login");
    }
  }, []);

  return (
    <div className={classes.welcome}>
      <h3>Hi Admin, </h3>
      <h1 className={classes.message}>{message}</h1>
    </div>
  );
};

export default Welcome;

// <div className={`${classes.welcome} ${classes.typewriter}`}>
// <h3>Hi Admin, </h3>
// <h1>Welcome to Admin Console!</h1>
// </div>
