import React from 'react';
import './Sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Your Library</h2>
        <div className="sidebar-controls">
          <button className="control-button">Playlists</button>
          <button className="control-button">By you</button>
          <button className="control-button">By Spotify</button>
          <button className="control-button">Download</button>
        </div>
      </div>
      <div className="sidebar-search">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="playlist-list">
        <div className="playlist-item">
          <i className="fas fa-heart"></i>
          <span>Liked Songs</span>
        </div>
        <div className="playlist-item">
          <i className="fas fa-podcast"></i>
          <span>Your Episodes</span>
        </div>
        <div className="playlist-item">
          <i className="fas fa-folder"></i>
          <span>EDC</span>
        </div>
        {/* Add more playlist items as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
