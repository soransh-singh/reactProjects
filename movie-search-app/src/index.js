import React from 'react';
import ReactDOM from 'react-dom';

import SearchMovies from "./searchMovies"
// eslint-disable-next-line
import styles from './master.css'



class Main extends React.Component {
  render(){
    return (
      <div>
        <header>
          <small>created by <a href="https://github.com/soransh-singh">soransh</a></small>
        </header>
        <main className="container">
          <h1 className="title">Movie search App</h1>
          <SearchMovies/>
        </main>
      </div>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'))
