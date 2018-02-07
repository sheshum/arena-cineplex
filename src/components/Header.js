import React, { Component } from 'react';
import "./Header.css";

class Header extends Component{
    render(){
        return(
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
        );
    }
   

}

export default Header;