import SearchBar from '../components/SearchBar';
import UserProfileMenu from '../components/UserProfileMenu';
import './TopPanel.scss';

const TopPanel = () => {
  return (
    <header className="top-panel">
      <nav className="navigation-buttons">
        <button className="nav-button">←</button>
        <button className="nav-button">→</button>
      </nav>
      <SearchBar />
      {/* <UserProfileMenu></UserProfileMenu> */}
    </header>
  );
};

export default TopPanel;
