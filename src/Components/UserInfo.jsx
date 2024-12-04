import React from "react";
import './style/UserInfo.css'

function UserInfo({ user1 }) {
    // Defensive coding: If `user1` is null or undefined, handle gracefully.
    if (!user1) {
      return <div>No user information available</div>;
    }
  
    return (
      <div className="card user-info">
        <div className="card-body">
          <h5 className="card-title">{user1.name}</h5>
          <p className="card-text">{user1.email}</p>
          <p className="card-role">{user1.role}</p>
          {user1.profilePicture && (
            <img
              src={user1.profilePicture}
              alt={`${user1.name}'s profile`}
              className="profile-picture"
            />
          )}
        </div>
      </div>
    );
  }
  
  export default UserInfo;
  