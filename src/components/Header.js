import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "./Header.css";

class Header extends Component{
    render(){
        return(
          <div className="header">
            <div id="before_nav">
              <img src="http://www.liranz.com/wp-content/uploads/2016/11/header10.jpg" alt=""/>
            </div>
            <div id="nav-wrapper">
                <nav id="nav-wrap">
                    <ul id="nav">
                      <li><NavLink to="/home" >Naslovna</NavLink></li>
                      <li><NavLink to="/repertoar">Repertoar</NavLink></li>
                      <li><NavLink to="/prices">Cenovnik</NavLink></li>
                      <li id="about">
                          <a className="dropdown">O nama</a>
                          <ul className="dropdown-content">
                           <li>O NAMA</li>
                           <li>VESTI</li>
                           <li>GALERIJE</li>
                           <li>USLUGE</li>
                          </ul>
                      </li>
                      <li><NavLink to="/contact">Kontakt</NavLink></li>
                      
                    </ul>
                  </nav>
            </div>        
          </div>
        );
    }
   

}

export default Header;