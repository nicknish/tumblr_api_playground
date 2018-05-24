import React from 'react';
import ReactDOM from 'react-dom';
import styles from './app.css';

import Search from './components/Search.jsx';

const App = () => {
  return (
    <main>
      <h1 className="main-header">Tumblr Playground</h1>
      <div className="main-section">
        <p>
          Hi, SkillShare team! This is my attempt in ~2 hours to build a small
          Tumblr Search playground. Hope you enjoy it!
        </p>
        <p>
          To see the code, visit{' '}
          <a href="https://github.com/nicknish/tumblr_api_playground">here</a>.
        </p>
        <p>
          To see the live version, visit{' '}
          <a href="https://xenodochial-feynman-c7277b.netlify.com/">here</a>!
        </p>
      </div>
      <Search />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
