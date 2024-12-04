import React from 'react';
import "./Components/style/Appstyle.css";
import UserInfo from './Components/UserInfo';
import Statistics from './Components/Statistics';
import Messages from './Components/Messages';

function App() {
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    profilePicture: "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
  };

  const statisticsData = {
    totalUsers: 1000,
    activeUsers: 750,
    newSignups: 50,
    activePercentage: ((750 / 1000) * 100).toFixed(1)
  };

  const messagesData = [
    "Welcome to the dashboard!",
    "Your account was updated successfully.",
    "New features are coming soon!"
  ];

  return (
    <div className="App">
      <div className="dashboard-grid">
        <UserInfo userData={userData} />
        <Statistics statisticsData={statisticsData} />
        <Messages messagesData={messagesData} />
      </div>
    </div>
  );
}

export default App;
