import Sidebar from '../components/Sidebar';
import './FrontPage.scss';
import TopPanel from '../components/TopPanel';

const FrontPage = () => {
  return (
    <div className="front-page">
      <TopPanel></TopPanel>

      <main className="main-content">
        <Sidebar />
      </main>
    </div>
  );
};

export default FrontPage;
