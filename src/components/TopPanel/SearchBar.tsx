// SearchBar.tsx
import React, { useState } from 'react';
import './SearchBar.scss';

interface SearchBarProps {
  searchText: string;
  onChange: (text: string) => void;
  onSearch: (query: string) => void;
  searchHistory: string[]; // Add searchHistory prop to receive the search history
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchText,
  onChange,
  onSearch,
  searchHistory,
}) => {
  const [showHistory, setShowHistory] = useState(false);

  const handleFocus = () => {
    if (searchText === 'Search...') {
      onChange('');
    }
    setShowHistory(true); // Show search history dropdown on focus
  };

  const handleBlur = () => {
    if (searchText === '') {
      onChange('Search...');
    }
    setShowHistory(false); // Hide search history dropdown on blur
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      // Hide search history dropdown on search
      setShowHistory(false);
      onSearch(searchText); // Pass searchText to onSearch function
    }
  };

  const handleHistoryClick = (query: string) => {
    onChange(query);
    handleSearch();
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          value={searchText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      {/* Render search history dropdown if showHistory is true */}
      {showHistory && (
        <div className="search-history">
          {searchHistory.map((query, index) => (
            <div
              key={index}
              className="history-item"
              onClick={() => handleHistoryClick(query)}
            >
              {query}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
