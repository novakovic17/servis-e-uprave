import React, { useState } from 'react';
import SkolaComponenta from './SkolaComponenta';

function Skole({ skole, onAdd, onRemove }) {
  const [sortAsc, setSortAsc] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSort = () => {
    setSortAsc(!sortAsc);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredSkole = skole.filter((skola) =>
    skola.naziv.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedSkole = sortAsc
    ? filteredSkole.sort((a, b) => a.bodovi - b.bodovi)
    : filteredSkole.sort((a, b) => b.bodovi - a.bodovi);

  return (
    <div>
       <button className="sortbtn btn" onClick={toggleSort}>
          {sortAsc ? 'Sortiraj opadajuće' : 'Sortiraj rastuće'}
        </button>
      <div className="sortbtn-container">
       
        <br />
        <input
          type="text"
          placeholder="Pretraži po nazivu"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="sveSkole">
        {sortedSkole.map((skola) => (
          <SkolaComponenta
            key={skola.id}
            skola={skola}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}

export default Skole;
