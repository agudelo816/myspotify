import SearchBar from './SearchBar';
import UserProfileMenu from './UserProfileMenu';
import './TopPanel.scss';

const TopPanel = () => {
  return (
    <header className="top-panel">
      <nav className="navigation-buttons">
        <button className="nav-button">←</button>
        <button className="nav-button">→</button>
      </nav>
      <SearchBar />
    </header>
  );
};

export default TopPanel;
