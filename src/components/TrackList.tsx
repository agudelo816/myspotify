import React from 'react';
import TrackCard from '../components/TrackCard';
import './TrackList.scss';

const trackData = [
  {
    title: 'Nothing Ever Changes (Original Mix)',
    artist: 'Magnus, Vintage Culture',
    duration: '3:46',
    releaseDate: '2024-05-24',
    formats: [
      { type: 'MP3', size: '8.93 MB' },
      { type: 'AIFF', size: '39.30 MB' },
    ],
  },
  {
    title: 'Hero (Original Mix)',
    artist: 'Vintage Culture, Emery Taylor',
    duration: '3:52',
    releaseDate: '2024-05-24',
    formats: [
      { type: 'MP3', size: '9.17 MB' },
      { type: 'AIFF', size: '39.80 MB' },
    ],
  },
  // Add more track data as needed
];

const TrackList: React.FC = () => {
  return (
    <div className="track-list">
      {trackData.map((track, index) => (
        <TrackCard
          key={index}
          title={track.title}
          artist={track.artist}
          duration={track.duration}
          releaseDate={track.releaseDate}
          formats={track.formats}
        />
      ))}
    </div>
  );
};

export default TrackList;
