
import React from 'react';
import './style/Statistics.css';

function Statistics({ statisticsData }) {
  const { totalUsers, activeUsers, newSignups, activePercentage } = statisticsData;

  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <p>Total Users: {totalUsers}</p>
      <p>Active Users: {activeUsers}</p>
      <p>New Signups: {newSignups}</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${activePercentage}%` }}
        ></div>
      </div>
      <p>Active User Percentage: {activePercentage}%</p>
    </div>
  );
}

export default Statistics;
