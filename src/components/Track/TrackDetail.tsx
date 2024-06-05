import React from 'react';
import './TrackDetail.scss';
import { Track } from '../../types/Track';

interface TrackDetailProps {
  track: Track;
  onClose: () => void; // Add onClose prop to handle closing the detail panel
}

const TrackDetail: React.FC<TrackDetailProps> = ({ track, onClose }) => {
  return (
    <div className="track-detail">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <h2>{track.title}</h2>
      <p>Artist: {track.artist}</p>
      <p>Duration: {track.duration}</p>
      <p>Release Date: {track.releaseDate}</p>
      <div className="track-formats">
        {track.formats.map((format, index) => (
          <p key={index}>
            {format.type}: {format.size}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TrackDetail;
