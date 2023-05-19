import React, { useState } from "react";
import classes from "../css/Login.module.css";
import { API_BASE_URL } from "../constants";


const Login = () => {

  const [formDetails, setFormDetails] = useState({ email: "", password: "" })

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


  const changeHandler = (event) => {
    let name = event.target.name;
    setFormDetails((prev) => {
      return (
        {
          ...prev,
          [name]: event.target.value
        }
      )
    })
    console.log(formDetails)
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formDetails.email.length <= 0 || formDetails.password.length <= 0) {
      alert("enter email and password")
      return
    }
    postData(`${API_BASE_URL}/login`, formDetails)
      .then((data) => {
        if (data.user) {
          const userData = data.user
          localStorage.setItem("user", JSON.stringify(userData))
        }else if(data.error) {
          alert(data.error)
        }
    });
    

    setFormDetails({ email: "", password: "" });

  }

  return (
    <div>
      <div className={classes.loginBox}>
        <form>
          <div className={classes.userBox}>
            <input onChange={changeHandler} value={formDetails.email || ""} type="text" name="email" required />
            <label>Username</label>
          </div>
          <div className={classes.userBox}>
            <input onChange={changeHandler} value={formDetails.password} type="password" name="password" required />
            <label>Password</label>
          </div>
          <center>
            <a href="#">
              Login
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Login;
