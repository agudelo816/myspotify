// BottomBar.tsx
import React from 'react';
import { Track } from '../../types/Track';
import MusicPlayer from '../MusicPlayer/MusicPlayer'; // Import the MusicPlayer component
import './BottomBar.scss';

interface BottomBarProps {
  track: Track | null;
  onOpenDetail: () => void;
}

const BottomBar: React.FC<BottomBarProps> = ({ track, onOpenDetail }) => {
  return (
    <div className="bottom-bar">
      {track ? (
        <>
          <div className="track-info">
            <h3>{track.title}</h3>
            <p>{track.artist}</p>
          </div>
          <button className="detail-button" onClick={onOpenDetail}>
            Show Details
          </button>
          {/* Integrate the MusicPlayer component here */}
          <MusicPlayer musicId={track.musicId} />
        </>
      ) : (
        <p>Select a track to see details</p>
      )}
    </div>
  );
};

export default BottomBar;
