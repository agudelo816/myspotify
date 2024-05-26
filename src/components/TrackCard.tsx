import React from 'react';
import './TrackCard.scss';

interface TrackCardProps {
  title: string;
  artist: string;
  duration: string;
  releaseDate: string;
  formats: { type: string; size: string }[];
}

const TrackCard: React.FC<TrackCardProps> = ({
  title,
  artist,
  duration,
  releaseDate,
  formats,
}) => {
  return (
    <div className="track-card">
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
