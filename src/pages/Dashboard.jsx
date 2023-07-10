import React from "react";
import { Link, useParams } from "react-router-dom";
import classes from "../css/Dashboard.module.css";
import { useEffect } from "react";
import Welcome from "../components/Welcome";


const Dashboard = () => {
  const { eventId, eventName } = useParams();
  return (
    <div className={classes.body}>
      <Welcome message={`Welcome to ${eventName} Dashboard!`} />
      <div className={`${classes.continueLearning} ${classes.addGrid}`}>
        <Link to="/update/banner">
          <div className={classes.add}>
            <i className="bx bx-plus"></i>
            <p>Update Banners</p>
          </div>
        </Link>
        <Link to="/admin/update">
          <div className={classes.add}>
            <i className="bx bx-plus"></i>
            <p>Update News </p>
          </div>
        </Link>
        <Link to={`speakers`}>
          <div className={classes.add}>
            <i className="bx bx-plus"></i>
            <p>Update Speakers</p>
          </div>
        </Link>
        <Link to="/admin/update">
          <div className={classes.add}>
            <i className="bx bx-plus"></i>
            <p>Update About</p>
          </div>
        </Link>
        <Link to="/admin/update">
          <div className={classes.add}>
            <i className="bx bx-plus"></i>
            <p>Update Schedule</p>
          </div>
        </Link>
        <Link to="/admin/update">
          <div className={classes.add}>
            <i className="bx bx-plus"></i>
            <p>Update Organizing Commitee</p>
          </div>
        </Link>
        <Link to="/admin/update">
          <div className={classes.add}>
            <i className="bx bx-plus"></i>
            <p>Update Registration</p>
          </div>
        </Link>
        <Link to="/admin/update">
          <div className={classes.add}>
            <i className="bx bx-plus"></i>
            <p>Update History</p>
          </div>
        </Link>
        <Link to="/admin/update">
          <div className={classes.add}>
            <i className="bx bx-plus"></i>
            <p>Update Sponsers</p>
          </div>
        </Link>
        <Link to="/admin/update">
          <div className={classes.add}>
            <i className="bx bx-plus"></i>
            <p>Update Organizers</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
