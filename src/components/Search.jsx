import React from 'react';
import axios from 'axios';

const API_KEY = 'uFGpDz9081oqf07v01uIwUmkW0F3AZciUBoV20eJ0NtvDyIWCB';
const API_URL = `https://api.tumblr.com/v2/tagged?api_key=${API_KEY}&tag=`;

export default class Search extends React.Component {
  state = {
    searchResults: []
  };

  buildAPIQuery = query => `${API_URL}${query}`;

  handleSubmitForm = e => {
    e.preventDefault();

    const searchValue = e.target.elements[0].value;

    axios.get(this.buildAPIQuery(searchValue)).then(resp => {
      const response = resp.data.response;
      const photoPosts = response.filter(result => result.type === 'photo');
      this.setState({ searchResults: photoPosts });
    });
  };

  render() {
    return (
      <div className="search">
        <div className="search-form">
          <form onSubmit={this.handleSubmitForm}>
            <input
              className="search-formInput"
              type="search"
              placeholder="Search posts"
            />
          </form>
        </div>
        <div className="search-results">
          {this.state.searchResults.map(result => (
            <div className="search-resultWrapper">
              <div className="search-result" key={result.id}>
                <img
                  src={result.photos[0].original_size.url}
                  className="search-resultImg"
                />
                <p>{result.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
