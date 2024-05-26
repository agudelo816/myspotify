import React, { useState } from 'react';
import './UserProfileMenu.scss';

const UserProfileMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="user-profile-menu">
      <img
        src="user-avatar-url" // Replace with actual URL or import an avatar image
        alt="User Avatar"
        onClick={toggleMenu}
        className="user-avatar"
      />
      {menuOpen && (
        <div className="menu">
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileMenu;
