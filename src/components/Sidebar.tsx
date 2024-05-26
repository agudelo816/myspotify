import React, { useState } from 'react';
import { Resizable, ResizeCallback, ResizeDirection } from 're-resizable';

import './Sidebar.scss';

const Sidebar: React.FC = () => {
  const [size, setSize] = useState({ width: 200, height: '100%' });
  const handleResizeStop: ResizeCallback = (e, direction, ref, d) => {
    setSize({
      width: size.width + d.width,
      height: size.height,
    });
  };

  return (
    <Resizable
      size={{ width: size.width, height: size.height }}
      onResizeStop={handleResizeStop}
      minWidth={150}
      maxWidth={500}
      enable={{ right: true }}
      className="sidebar"
    >
      <div className="sidebar-header">
        <h2>Your Library</h2>
        <div className="sidebar-controls">
          <button className="control-button">Playlists</button>
          <button className="control-button">By you</button>
          <button className="control-button">By Spotify</button>
          <button className="control-button">Download</button>
        </div>
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
    </Resizable>
  );
};

export default Sidebar;
