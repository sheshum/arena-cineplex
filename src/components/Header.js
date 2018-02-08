import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "./Header.css";

class Header extends Component{
    render(){
        return(
          <div className="header">
            <div id="before_nav"></div>
            <div id="nav-wrapper">
                <nav id="nav-wrap">
                    <ul id="nav">
                      <li><NavLink to="/home" activeStyle={{color: "#F06000"}} >Naslovna</NavLink></li>
                      <li><NavLink to="/repertoar" activeStyle={{color: "#F06000"}} >Repertoar</NavLink></li>
                      <li><a>Cenovnik</a></li>
                      <li>
                          <a className="dropdown">O nama</a>
                          <div id="fuck" className="dropdown-content">
                              Hello World!
                          </div>
                      </li>
                      <li><a>Kontakt</a></li>
                      
                    </ul>
                  </nav>
            </div>        
          </div>
        );
    }
   

}

export default Header;