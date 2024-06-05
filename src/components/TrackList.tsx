import React from 'react';
import TrackCard from './TrackCard';
import { Track } from '../types/Track';
import './TrackList.scss';

interface TrackListProps {
  trackData: Track[];
  onSelectTrack: (track: Track) => void;
  onOpenDetail: () => void;
}

const TrackList: React.FC<TrackListProps> = ({
  trackData,
  onSelectTrack,
  onOpenDetail,
}) => {
  return (
    <div className="track-list-container">
      <div className="track-list">
        {trackData.map((track, index) => (
          <TrackCard
            key={index}
            track={track}
            onClick={() => {
              onSelectTrack(track);
              onOpenDetail();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TrackList;
