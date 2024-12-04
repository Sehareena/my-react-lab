 
  import React from 'react';
import './style/UserInfo.css';

function UserInfo({ userData }) {
  const { name, email, role, profilePicture } = userData;
  const roleColor = role === "Administrator" ? "red" : "blue";

  return (
    <div className="user-info">
      <img src={profilePicture} alt="Profile" className="profile-pic" />
      <h2>{name}</h2>
      <p>{email}</p>
      <span className="role" style={{ backgroundColor: roleColor }}>{role}</span>
    </div>
  );
}

export default UserInfo;
