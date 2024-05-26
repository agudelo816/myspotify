import React from 'react';
import { Track } from '../types/Track';
import './TrackCard.scss';

interface TrackCardProps {
  track: Track;
  onClick: () => void; // Add onClick prop to handle click events
}

const TrackCard: React.FC<TrackCardProps> = ({ track, onClick }) => {
  const { title, artist, duration, releaseDate, formats } = track;

  return (
    <div className="track-card" onClick={onClick}>
      <div className="track-info">
        <h3>{title}</h3>
        <p>{artist}</p>
        <p>{duration}</p>
        <p>Released on: {releaseDate}</p>
      </div>
      <div className="track-formats">
        {formats.map((format, index) => (
          <a href="#" key={index} className="format-link">
            {format.type} - {format.size}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TrackCard;
