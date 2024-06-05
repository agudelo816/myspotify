import React, { useState, useEffect } from 'react';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTracklist, setFilteredTracklist] = useState<Track[]>([]);

  useEffect(() => {
    if (!searchQuery) {
      // Reset filtered tracklist if search query is empty
      setFilteredTracklist(trackData);
    } else {
      // Filter tracklist based on search query
      const filteredTracks = trackData.filter(
        (track) =>
          track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          track.artist.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredTracklist(filteredTracks);
    }
  }, [searchQuery]);

  return (
    <div className="front-page">
      <TopPanel onSearch={setSearchQuery} />
      <main className="main-content">
        <Sidebar />
        <Content>
          <TrackList
            trackData={filteredTracklist} // Pass filtered tracklist to TrackList component
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
