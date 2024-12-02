import React from 'react';
import './style/ProfileCard.css';


function ProfileCard(props) {
  const {name :personname, age :personage, occupation, location :personlocation} =props;
  return (
    <div>
      <div className='detailtitle'>
        <h1> PROFILE CARD </h1>
        </div>

    <div className='details'>
      <p>Applicant's Name: {personname} </p>
      <p>Applicant's Age: {personage} </p>
      <p>Applicant's Occupation: {occupation }</p>
      <p>Applicant's Location: {personlocation} </p>
    </div>
    </div>
  );
}
    export default ProfileCard;  