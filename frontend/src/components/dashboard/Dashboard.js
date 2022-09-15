import React from 'react';
import Breakfast from '../breakfast/Breakfast';
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
        <h2>
        Dashboard Opened
        </h2>
        <button className="button">
            Logout
        </button>
        <Breakfast/>
    </div>
    
  )
}

export default Dashboard