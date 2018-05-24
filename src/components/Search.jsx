import React from 'react';
import axios from 'axios';

const API_KEY = 'uFGpDz9081oqf07v01uIwUmkW0F3AZciUBoV20eJ0NtvDyIWCB';
const API_URL = `http://api.tumblr.com/v2/tagged?api_key=${API_KEY}&tag=`;

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
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <input type="search" placeholder="Search posts" />
        </form>
        {this.state.searchResults.map(result => (
          <div key={result.id}>
            <img src={result.photos[0].original_size.url} />
            <p>{result.summary}</p>
          </div>
        ))}
      </div>
    );
  }
}
