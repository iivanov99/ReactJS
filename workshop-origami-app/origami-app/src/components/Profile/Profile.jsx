import React from 'react';
import Posts from '../Posts/Posts';

import './Profile.css';

const Profile = () => {
  return (
    <div className="Profile">
      <img src="http://www.agromarketday.com/images/profile-holder.png" width="200px" alt="" />
      <div className="personal-info">
        <p>
          <span>Email: </span>
          someone@someone.gg
          </p>
        <p>
          <span>Posts: </span>
          9
          </p>
      </div>
      <div>
        <h2>3 of you recent posts</h2>
        <Posts limit={3}/>
      </div>
    </div>
  );
};

export default Profile;