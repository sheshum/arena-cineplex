import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-body">
        <header className="App-header">
          <nav id="nav-wrap">
            <ul id="nav">
              <li><a>Naslovna</a></li>
              <li><a>Repertoar</a></li>
              <li><a>Cenovnik</a></li>
              <li><a>O nama</a></li>
              <li><a>Kontakt</a></li>
            </ul>

          </nav>
         
        </header>
        
      </div>
    );
  }
}

export default App;
