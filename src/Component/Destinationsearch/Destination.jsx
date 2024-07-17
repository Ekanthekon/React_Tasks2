import React, { useState } from 'react';
import './Destination.css'; 

const DestinationSearch = () => {
  const [searchInput, setSearchInput] = useState('');

  const destinationsList = [
    { id: 1, name: 'Escarpment', imgUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwordshake.com%2Fdefinition%2Fescarpment&psig=AOvVaw0Oxk_9Lyj5f7J_oY-bQzEF&ust=1721283532544000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCLy_y2rYcDFQAAAAAdAAAAABAE' },
    { id: 2, name: 'Westminster Abbey', imgUrl: 'https://example.com/westminster-abbey.jpg' },

  ];

  const handleInputChange = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  const filteredDestinations = destinationsList.filter(destination =>
    destination.name.toLowerCase().includes(searchInput)
  );

  return (
    <div className="destination-search">
      <h1>Destination Search</h1>
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Search destinations..."
        className="search-input"
      />
      <div className="destinations">
        {filteredDestinations.map(destination => (
          <div key={destination.id} className="destination">
            <img src={destination.imgUrl} alt={destination.name} className="destination-image" />
            <p className="destination-name">{destination.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationSearch;
