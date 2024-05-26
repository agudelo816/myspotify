import Sidebar from '../components/Sidebar';
import './FrontPage.scss';
import TopPanel from '../components/TopPanel';
import Content from '../components/Content';
import TrackList from '../components/TrackList'; // Import the new TrackList component

const FrontPage = () => {
  return (
    <div className="front-page">
      <TopPanel></TopPanel>

      <main className="main-content">
        <Sidebar />
        <Content>
          <TrackList /> {/* Add the TrackList component here */}
        </Content>
      </main>
    </div>
  );
};

export default FrontPage;
