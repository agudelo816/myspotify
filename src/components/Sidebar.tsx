import React, { useState } from 'react';
import { Resizable, ResizeCallback } from 're-resizable';
import SidebarButton from './SidebarButton';

import './Sidebar.scss';
// Sample data for "By you" button
const byYouData: ButtonData[] = [
  {
    label: 'Item 1 by You',
    onClick: () => console.log('Clicked Item 1 by You'),
  },
  {
    label: 'Item 2 by You',
    onClick: () => console.log('Clicked Item 2 by You'),
  },
  {
    label: 'Item 3 by You',
    onClick: () => console.log('Clicked Item 3 by You'),
  },
];

// Sample data for "By Spotify" button
const spotifyData: ButtonData[] = [
  {
    label: 'Item 1 by Spotify',
    onClick: () => console.log('Clicked Item 1 by Spotify'),
  },
  {
    label: 'Item 2 by Spotify',
    onClick: () => console.log('Clicked Item 2 by Spotify'),
  },
  {
    label: 'Item 3 by Spotify',
    onClick: () => console.log('Clicked Item 3 by Spotify'),
  },
];

// Sample data for "Download" button
const downloadData: ButtonData[] = [
  {
    label: 'Download Item 1',
    onClick: () => console.log('Clicked Download Item 1'),
  },
  {
    label: 'Download Item 2',
    onClick: () => console.log('Clicked Download Item 2'),
  },
  {
    label: 'Download Item 3',
    onClick: () => console.log('Clicked Download Item 3'),
  },
];

const playlistsData: ButtonData[] = [
  { label: 'Playlist 1', onClick: () => console.log('Clicked Playlist 1') },
  { label: 'Playlist 2', onClick: () => console.log('Clicked Playlist 2') },
  { label: 'Playlist 3', onClick: () => console.log('Clicked Playlist 3') },
];
const Sidebar: React.FC = () => {
  const [size, setSize] = useState({ width: 200, height: '100%' });
  const [showButtons, setShowButtons] = useState(false);
  const [buttonData, setButtonData] = useState<ButtonData[]>([]);

  const handleResizeStop: ResizeCallback = (e, direction, ref, d) => {
    setSize((prevSize) => ({
      width: prevSize.width + d.width,
      height: prevSize.height,
    }));
  };

  const handleButtonClick = (data: ButtonData[]) => {
    setButtonData(data);
    setShowButtons(true);
  };

  const handleBackClick = () => {
    setShowButtons(false);
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
          {showButtons ? (
            <>
              {buttonData.map((item, index) => (
                <SidebarButton
                  key={index}
                  label={item.label}
                  onClick={item.onClick}
                />
              ))}
              <SidebarButton label="Back" onClick={handleBackClick} />
            </>
          ) : (
            <>
              <SidebarButton
                label="Playlists"
                onClick={() => handleButtonClick(playlistsData)}
              />
              <SidebarButton
                label="By you"
                onClick={() => handleButtonClick(byYouData)}
              />
              <SidebarButton
                label="By Spotify"
                onClick={() => handleButtonClick(spotifyData)}
              />
              <SidebarButton
                label="Download"
                onClick={() => handleButtonClick(downloadData)}
              />
            </>
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default Sidebar;
