// src/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
  
       <div className="header">
          <div>
            <div className="welcome">
              <h2>Welcome back</h2>
              <p>Your smart home overview</p>
            </div>
          </div>
          <div className="user-profile">
            <span className="user-name">Alex Morgan</span>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              style={{ width: 40, height: 40, borderRadius: '50%', marginLeft: '10px' }}
            />
          </div>
        </div>

   
  );
}
