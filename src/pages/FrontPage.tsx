import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import TopPanel from '../components/TopPanel/TopPanel';
import Content from '../components/Content/Content';
import TrackList from '../components/Track/TrackList';
import BottomBar from '../components/BottomBar/BottomBar';
import { Track } from '../types/Track';
import TrackDetail from '../components/Track/TrackDetail';
import './FrontPage.scss';
import trackData from '../data/TrackData';

const FrontPage: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <div className="front-page">
      <TopPanel />
      <main className="main-content">
        <Sidebar />
        <Content>
          <TrackList
            trackData={trackData}
            onSelectTrack={setSelectedTrack}
            onOpenDetail={() => setIsDetailOpen(true)}
          />
        </Content>
      </main>
      <BottomBar
        track={selectedTrack}
        onOpenDetail={() => setIsDetailOpen(true)}
      />
      {selectedTrack && isDetailOpen && (
        <TrackDetail
          track={selectedTrack}
          onClose={() => setIsDetailOpen(false)}
        />
      )}
    </div>
  );
};

export default FrontPage;
