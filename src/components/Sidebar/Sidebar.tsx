import React, { useState } from 'react';
import { Resizable, ResizeCallback } from 're-resizable';
import SidebarButton from './SidebarButton';
import {
  ButtonData,
  playlistsData,
  byYouData,
  spotifyData,
  downloadData,
} from '../../data';
import MusicPlayer from '../MusicPlayer/MusicPlayer';

import './Sidebar.scss';

const Sidebar: React.FC = () => {
  const [size, setSize] = useState({ width: 200, height: '100%' });
  const [showButtons, setShowButtons] = useState(false);
  const [buttonData, setButtonData] = useState<ButtonData[]>([]);
  const [selectedMusicId, setSelectedMusicId] = useState<string | null>(null); // State to store the selected music ID

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

  const handleMusicButtonClick = (musicId: string) => {
    setSelectedMusicId(musicId); // Set the selected music ID
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
                  onClick={() => handleMusicButtonClick(item.musicId)} // Pass musicId to handleMusicButtonClick
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
      {selectedMusicId && (
        <MusicPlayer musicId={selectedMusicId} /> // Render the MusicPlayer component with the selected music ID
      )}
    </Resizable>
  );
};

export default Sidebar;
