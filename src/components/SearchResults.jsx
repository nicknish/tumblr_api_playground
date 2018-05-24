import React from 'react';

const SearchResults = ({ searchResults }) => (
  <div className="search-results">
    {searchResults.map(result => (
      <div className="search-resultWrapper" key={result.id}>
        <div className="search-result">
          <img
            src={result.photos[0].original_size.url}
            className="search-resultImg"
          />
          <p>{result.summary}</p>
        </div>
      </div>
    ))}
  </div>
);

export default SearchResults;
