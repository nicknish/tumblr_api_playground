import React from 'react';
import ReactDOM from 'react-dom';
import styles from './app.css';

import Search from './components/Search.jsx';

const App = () => {
  return (
    <section>
      <h1>Tumblr Playground</h1>
      <Search />
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
