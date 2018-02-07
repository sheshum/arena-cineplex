import React, { Component } from 'react';
import "./Header.css";

class Header extends Component{
    render(){
        return(
          <div className="header">
            <div id="before_nav"></div>
            <div id="nav-wrapper">
                <nav id="nav-wrap">
                    <ul id="nav">
                      <li><a>Naslovna</a></li>
                      <li><a>Repertoar</a></li>
                      <li><a>Cenovnik</a></li>
                      <li><a>O nama</a></li>
                      <li><a>Kontakt</a></li>
                    </ul>
                  </nav>
            </div>
                    
          </div>
        );
    }
   

}

export default Header;