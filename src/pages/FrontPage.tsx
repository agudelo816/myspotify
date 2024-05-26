import React from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import UserProfileMenu from '../components/UserProfileMenu';
import './FrontPage.scss';

const FrontPage = () => {
  return (
    <div className="front-page">
      <Sidebar />
      <main className="main-content">
        <header className="top-panel">
          <nav className="navigation-buttons">
            <button className="nav-button">←</button>
            <button className="nav-button">→</button>
          </nav>
          <SearchBar />
          <UserProfileMenu />
        </header>
      </main>
    </div>
  );
};

export default FrontPage;
