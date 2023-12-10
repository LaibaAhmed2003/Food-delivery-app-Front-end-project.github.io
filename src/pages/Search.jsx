import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search ..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={{
          width: '100%',
          maxwidth: '400px',
          height: '40px',
          margin: '0 auto',
          padding: '0 10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button onClick={handleSearch} style={{
        width: '40px',
        height: '40px',
        margin: '0 0 0 -40px',
        border: 'none',
        backgroundColor: '#fff',
        cursor: 'pointer',
      }}>
        <span style={{
          content: '',
          width: '16px',
          height: '16px',
          margin: '12px auto',
          backgroundImage: 'url("https://i.imgur.com/search-icon.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }} />
      </button>
    </div>
  );
};

export default SearchBar;