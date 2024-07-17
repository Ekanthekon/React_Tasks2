// GoogleSuggestions.js

import React, { useState } from 'react';
import './Google.css'; // Import your CSS file

const suggestionsList = [
  { id: 1, suggestion: 'Search Google' },
  { id: 2, suggestion: 'Price of Ethereum' },
  { id: 3, suggestion: 'Oculus Quest 2 specs' },
  { id: 4, suggestion: 'What is a snare Price' },
  { id: 5, suggestion: 'Price of Ethereum today' },
  { id: 6, suggestion: 'Latest trends in AI' },
  { id: 7, suggestion: 'Latest trends in Music' }
];

const GoogleSuggestions = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestionsList);

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchInput(value);
    const filtered = suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(value)
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion.suggestion);
  };

  return (
    <div className="google-suggestions">
      <h1 className="google-logo">Google</h1>
      <input
        type="text"
        className="google-input"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search Google"
      />
      <ul className="suggestions-list">
        {filteredSuggestions.map(suggestion => (
          <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
            <button className="google-button">
              {suggestion.suggestion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoogleSuggestions;
