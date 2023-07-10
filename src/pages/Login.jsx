import React, { useState } from "react";
import classes from "../css/Login.module.css";
import { API_BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import { postData } from "../utils/ApiCalls";

const Login = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({ email: "", password: "" });

  const changeHandler = (event) => {
    let name = event.target.name;
    setFormDetails((prev) => {
      return {
        ...prev,
        [name]: event.target.value,
      };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formDetails.email.length <= 0 || formDetails.password.length <= 0) {
      alert("enter email and password");
      return;
    }
    postData(`${API_BASE_URL}/login`, formDetails)
      .then((data) => {
        console.log(data);
        if (data.admin) {
          const userData = data.admin;
          localStorage.setItem("user", JSON.stringify(userData));
          localStorage.setItem("token", data.token);
          localStorage.setItem("timeOfLogin", Date.now());
          setFormDetails({ email: "", password: "" });
          navigate("/");
        } else if (data.error) {
          alert(data.error);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className={classes.body}>
      <div className={classes.loginBox}>
        <form>
          <div className={classes.userBox}>
            <input
              onChange={changeHandler}
              value={formDetails.email || ""}
              type="text"
              name="email"
              required
            />
            <label>Username</label>
          </div>
          <div className={classes.userBox}>
            <input
              onChange={changeHandler}
              value={formDetails.password}
              type="password"
              name="password"
              required
            />
            <label>Password</label>
          </div>
          <center>
            <div className={classes.submit}>
              <input onClick={submitHandler} type="submit" value="Login" />
              <span className={classes.lineAnimation}></span>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
