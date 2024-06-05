import React, { useState } from 'react';
import SearchBar from './SearchBar';
import UserProfileMenu from './UserProfileMenu';
import './TopPanel.scss';

interface TopPanelProps {
  onSearch: (query: string) => void; // Add onSearch prop to handle search query
}

const TopPanel: React.FC<TopPanelProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleSearch = () => {
    setSearchHistory((prevHistory) => [searchText, ...prevHistory]);
    // Perform search logic here
    console.log('Searching for:', searchText);
    onSearch(searchText); // Pass search query to parent component
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value); // Update searchText with the value from the input field
  };

  return (
    <header className="top-panel">
      <nav className="navigation-buttons">
        <button className="nav-button">←</button>
        <button className="nav-button">→</button>
      </nav>
      {/* Pass the correct props to the SearchBar component */}
      <SearchBar
        searchText={searchText}
        onChange={(text) => setSearchText(text)} // Use a function to set the searchText state
        onSearch={handleSearch}
        searchHistory={searchHistory} // Pass searchHistory to SearchBar component
      />
      <UserProfileMenu />
    </header>
  );
};

export default TopPanel;
