import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams();
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Username: {username}</p>
      <p>This is where the user's details will appear.</p>
    </div>
  );
}

export default UserProfile;
