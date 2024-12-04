import React from "react";
import UserInfo from "./Components/UserInfo";
import Statistics from "./Components/Statistics";
import Messages from "./Components/Messages";
import "./App.css";

function App() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    profilePicture: 'https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp'
  
  
   
  };

  const statisticsData = {
    totalUsers: 1000,
    activeUsers: 850,
    newSignups: 150,
    activePercentage: (850 / 1000) * 100
  };

  const messagesData = {
    message1: "System update scheduled at 3 PM.",
    message2: "New user registration successful.",
    message3: "Project deadline extended."
  };

  return (

  <div className="dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-row">
        <div className="dashboard-column">
          <UserInfo user1={user} />
        </div>
        <div className="dashboard-column">
          <Statistics stdata={statisticsData} />
        </div>
        <div className="dashboard-column">
          <Messages msgdata={messagesData} />
        </div>
      </div>
    </div>
  );
}

export default App;


