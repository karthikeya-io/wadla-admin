import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../css/Admin.module.css'


const Admin = () => {

  return (
    <div>
        <div className={`${classes.welcome} ${classes.typewriter}`}>
          <h3>Hi Admin, </h3>
          <h1>Welcome to Admin Console!</h1>
        </div>
        <div className={`${classes.continueLearning} ${classes.addGrid}`}>
          <Link to='/admin/update'>
            <div className={classes.add}>
              <i className='bx bx-plus'></i>
              <p>Update Banners</p>
            </div>
          </Link>
          <Link to='/admin/update'>
            <div className={classes.add}>
              <i className='bx bx-plus'></i>
              <p>Update News </p>
            </div>
          </Link>
          <Link to='/admin/update'>
            <div className={classes.add}>
              <i className='bx bx-plus'></i>
                <p>Update Speakers</p>
            </div>
          </Link>
          <Link to='/admin/update'>
            <div className={classes.add}>
              <i className='bx bx-plus'></i>
                <p>Update About</p>
            </div>
          </Link>
          <Link to='/admin/update'>
            <div className={classes.add}>
              <i className='bx bx-plus'></i>
                <p>Update Schedule</p>
            </div>
          </Link>
          <Link to='/admin/update'>
            <div className={classes.add}>
              <i className='bx bx-plus'></i>
                <p>Update Organizing Commitee</p>
            </div>
          </Link>
          <Link to='/admin/update'>
            <div className={classes.add}>
              <i className='bx bx-plus'></i>
                <p>Update Registration</p>
            </div>
          </Link>
          <Link to='/admin/update'>
            <div className={classes.add}>
              <i className='bx bx-plus'></i>
                <p>Update History</p>
            </div>
          </Link>
          <Link to='/admin/update'>
            <div className={classes.add}>
              <i className='bx bx-plus'></i>
                <p>Update Sponsers</p>
            </div>
          </Link>
          <Link to='/admin/update'>
            <div className={classes.add}>
              <i className='bx bx-plus'></i>
                <p>Update Organizers</p>
            </div>
          </Link>
          </div>
    </div>
  )
}




export default Admin