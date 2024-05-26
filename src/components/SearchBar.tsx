import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState('Search...');

  const handleFocus = () => {
    if (searchText === 'Search...') {
      setSearchText('');
    }
  };

  const handleBlur = () => {
    if (searchText === '') {
      setSearchText('Search...');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchText);
    // Implement the search functionality here
  };

  return (
    <div className="search-bar">
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
  );
};

export default SearchBar;
