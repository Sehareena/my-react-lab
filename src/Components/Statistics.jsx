import React from "react";
import './style/statistics.css'

function Statistics ({stdata }) {
    return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">System Statistics</h5>
        <p>Total Users: {stdata.totalUsers}</p>
        <p>Active Users: {stdata.activeUsers}</p>
        <p>New Signups: {stdata.newSignups}</p>
        <div>
           <p id="active-percentage">{stdata.activePercentage?.toFixed(1)}%</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
