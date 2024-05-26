import React from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import UserProfileMenu from '../components/UserProfileMenu';
import './FrontPage.scss';

const FrontPage = () => {
  return (
    <div className="front-page">
      <Sidebar />
      <div className="main-content">
        <div className="top-panel">
          <div className="navigation-buttons">
            <button className="nav-button">←</button>
            <button className="nav-button">→</button>
          </div>
          <SearchBar />
          <UserProfileMenu />
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
