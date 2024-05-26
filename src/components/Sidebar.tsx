import React, { useState } from 'react';
// import { ResizableBox, ResizeCallbackData } from 'react-resizable';
import { Resizable, ResizeCallback, ResizeDirection } from 're-resizable';

import './Sidebar.scss';

const Sidebar: React.FC = () => {
  // const [width, setWidth] = useState(200); // Initial width of the sidebar
  const [size, setSize] = useState({ width: 200, height: '100%' });
  const handleResizeStop: ResizeCallback = (e, direction, ref, d) => {
    setSize({
      width: size.width + d.width,
      height: size.height,
    });
  };

  // const handleResize = (event, { size }) => {
  //   setWidth(size.width);
  // };

  // const handleResize = (
  //   event: React.SyntheticEvent<Element>,
  //   { size }: ResizeCallbackData
  // ) => {
  //   setWidth(size.width);
  // };

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
    </Resizable>
  );
  // return (
  //   <ResizableBox
  //     width={width}
  //     height={Infinity}
  //     axis="x"
  //     minConstraints={[150, Infinity]}
  //     maxConstraints={[500, Infinity]}
  //     onResize={handleResize}
  //     resizeHandles={['e']}
  //     className="sidebar"
  //   >
  //     <div className="sidebar">
  //       <div className="sidebar-header">
  //         <h2>Your Library</h2>
  //         <div className="sidebar-controls">
  //           <button className="control-button">Playlists</button>
  //           <button className="control-button">By you</button>
  //           <button className="control-button">By Spotify</button>
  //           <button className="control-button">Download</button>
  //         </div>
  //       </div>
  //       <div className="sidebar-search">
  //         <input
  //           type="text"
  //           placeholder="Search Playlists"
  //           className="search-input"
  //         />
  //       </div>
  //       <div className="playlist-list">
  //         <div className="playlist-item">
  //           <i className="fas fa-heart"></i>
  //           <span>Liked Songs</span>
  //         </div>
  //         <div className="playlist-item">
  //           <i className="fas fa-podcast"></i>
  //           <span>Your Episodes</span>
  //         </div>
  //         <div className="playlist-item">
  //           <i className="fas fa-folder"></i>
  //           <span>EDC</span>
  //         </div>
  //         {/* Add more playlist items as needed */}
  //       </div>
  //     </div>
  //   </ResizableBox>
  // );
};

export default Sidebar;
