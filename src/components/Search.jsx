import React from 'react';
import axios from 'axios';

import Loader from './Loader.jsx';
import SearchResults from './SearchResults.jsx';

const API_KEY = 'uFGpDz9081oqf07v01uIwUmkW0F3AZciUBoV20eJ0NtvDyIWCB';
const API_URL = `https://api.tumblr.com/v2/tagged?api_key=${API_KEY}&tag=`;

export default class Search extends React.Component {
  state = {
    searchResults: [],
    loading: false
  };

  buildAPIQuery = query => `${API_URL}${query}`;

  handleSubmitForm = e => {
    e.preventDefault();
    this.setState({ searchResults: [], loading: true });

    const searchValue = e.target.elements[0].value;

    axios.get(this.buildAPIQuery(searchValue)).then(resp => {
      const response = resp.data.response;
      const photoPosts = response.filter(result => result.type === 'photo');
      this.setState({ searchResults: photoPosts, loading: false });
    });
  };

  render() {
    const results = this.state.loading ? (
      <Loader />
    ) : (
      <SearchResults searchResults={this.state.searchResults} />
    );

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
        {results}
      </div>
    );
  }
}
