import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Repertoar from "./components/Repertoar";

class App extends Component {
  render() {
    return (

      <Router>
        <div className="">                 
          <Route path={"/"} component={Header}/>
          <Route exact path={"/"} component={Repertoar}/>        
          <Route path={"/home"} component={Home}/>
        </div>
     </Router>

      /* <div className="">
        <Header />
        <Repertoar />
        <Home />  
      </div>  */
    );
  }
}

export default App;
