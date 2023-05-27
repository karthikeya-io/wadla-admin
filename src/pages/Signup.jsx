import React, { useState } from "react";
import classes from "../css/Signup.module.css";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../constants";

const Signup = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({});

  const changeHandler = (event) => {
    let name = event.target.name;
    if (name === "confirmPassword") {
      if (event.target.value !== formDetails.password) {
        event.target.style.border = "2px solid red";
      } else {
        event.target.style.border = "2px solid green";
      }
    }
    setFormDetails((prev) => {
      return {
        ...prev,
        [name]: event.target.value,
      };
    });
  };

  async function postData(url = "", data = {}) {
    console.log(url);
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
      alert(message);
    }
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (formDetails.password !== formDetails.confirmPassword) {
      alert("Passwords and confirm password do not match");
      return;
    }
    postData(`${API_BASE_URL}/signup`, formDetails)
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(formDetails);
    setFormDetails({});
    navigate("/login");
  };

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <p className={classes.title}>Register </p>
        <p className={classes.message}>Create an admin account.</p>

        <label>
          <input
            required
            minLength="3"
            placeholder=""
            type="text"
            className={classes.input}
            name="name"
            value={formDetails.name || ""}
            onChange={changeHandler}
          />
          <span>name</span>
        </label>

        <label>
          <input
            required
            placeholder=""
            type="email"
            className={classes.input}
            name="email"
            value={formDetails.email || ""}
            onChange={changeHandler}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required
            placeholder=""
            type="password"
            className={classes.input}
            minLength={6}
            name="password"
            value={formDetails.password || ""}
            onChange={changeHandler}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            required
            placeholder=""
            type="password"
            className={classes.input}
            minLength={6}
            name="confirmPassword"
            value={formDetails.confirmPassword || ""}
            onChange={changeHandler}
          />
          <span>Confirm password</span>
        </label>
        <button type="submit" className={classes.submit}>
          Submit
        </button>
        <p className="signin">
          Already have an acount ? <a href="#">Signin</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default Signup;
