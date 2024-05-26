import React, { useState } from 'react';
import TrackCard from './TrackCard';
import TrackDetail from './TrackDetail';
import { Track } from '../types/Track';
import './TrackList.scss';

const trackData: Track[] = [
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
  {
    title: 'Chemicals (Original Mix)',
    artist: 'Vintage Culture, Goodboys',
    duration: '3:37',
    releaseDate: '2024-05-24',
    formats: [
      { type: 'MP3', size: '8.59 MB' },
      { type: 'AIFF', size: '36.81 MB' },
    ],
  },
  {
    title: 'Addicted (Curai Remix)',
    artist: 'Ink, The Chainsmokers, Zerb',
    duration: '3:57',
    releaseDate: '2024-05-21',
    formats: [
      { type: 'MP3', size: '9.15 MB' },
      { type: 'AIFF', size: '40.04 MB' },
    ],
  },
  {
    title: 'Riverside (Extended Mix)',
    artist: 'ZOYA',
    duration: '5:09',
    releaseDate: '2024-05-24',
    formats: [
      { type: 'MP3', size: '12.03 MB' },
      { type: 'AIFF', size: '52.25 MB' },
    ],
  },
  {
    title: 'Closemouthed (Extended Mix)',
    artist: 'Lexer',
    duration: '6:11',
    releaseDate: '2024-05-24',
    formats: [
      { type: 'MP3', size: '13.09 MB' },
      { type: 'AIFF', size: '62.96 MB' },
    ],
  },
  {
    title: 'All I Need (Original Mix)',
    artist: 'Kito, Chrome Sparks, IS U IS U',
    duration: '2:58',
    releaseDate: '2024-05-08',
    formats: [
      { type: 'MP3', size: '7.17 MB' },
      { type: 'AIFF', size: '30.42 MB' },
    ],
  },
  {
    title: 'Distraction (Extended Mix)',
    artist: 'Jem Cooke, Nu Aspect',
    duration: '6:19',
    releaseDate: '2024-05-03',
    formats: [
      { type: 'MP3', size: '14.63 MB' },
      { type: 'AIFF', size: '63.96 MB' },
    ],
  },
  {
    title: 'Ecstasy (Extended Mix)',
    artist: 'That Kind',
    duration: '4:25',
    releaseDate: '2024-05-03',
    formats: [
      { type: 'MP3', size: '10.63 MB' },
      { type: 'AIFF', size: '44.62 MB' },
    ],
  },
  {
    title: 'Do My Ting (Original Mix)',
    artist: 'Barclay Crenshaw, Flowdan, Stush',
    duration: '2:50',
    releaseDate: '2024-03-07',
    formats: [
      { type: 'MP3', size: '7.04 MB' },
      { type: 'AIFF', size: '30.05 MB' },
    ],
  },
  {
    title: 'Focus Is You (Extended Mix)',
    artist: 'Jake Silva, Frankie Sims',
    duration: '5:20',
    releaseDate: '2024-04-12',
    formats: [
      { type: 'MP3', size: '12.50 MB' },
      { type: 'AIFF', size: '54.12 MB' },
    ],
  },
  {
    title: 'Boogie Foundation (Original Mix)',
    artist: 'Sam Paradise',
    duration: '5:44',
    releaseDate: '2024-12-10',
    formats: [
      { type: 'MP3', size: '13.29 MB' },
      { type: 'AIFF', size: '58.08 MB' },
    ],
  },
];

const TrackList: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  return (
    <div className="track-list">
      {trackData.map((track, index) => (
        <TrackCard
          key={index}
          track={track}
          onClick={() => setSelectedTrack(track)} // Set the selected track on click
        />
      ))}
      {selectedTrack && (
        <TrackDetail
          track={selectedTrack}
          onClose={() => setSelectedTrack(null)} // Clear the selected track on close
        />
      )}
    </div>
  );
};

export default TrackList;
