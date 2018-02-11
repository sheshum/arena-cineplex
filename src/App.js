import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
//import {PropsRoute} from "react-router-with-props";
import axios from "axios";

import Root from "./components/Root";
import Home from "./components/Home";
import Repertoar from "./components/Repertoar";
import Prices from "./components/Prices";
import Contact from "./components/Contact";

class App extends Component {

  constructor(props){
    super(props);
  
      this.state = {
          repertoar: []
        
      };
      
  }


    componentWillMount(){
            
        this.getRepertoarList();   
    }

    getRepertoarList(){

      axios.request({
          method: "GET",
          url: "https://api.mlab.com/api/1/databases/arenacineplex/collections/repertoar?apiKey=jNnNnruij1tLrOCwXDfWlDbyXhZOJNwN"
        }).then((response) => {
            this.setState({repertoar: response.data});
           
          
        }).catch((err) => {
            console.log(err);
      });

    }



  
  
  render() {

    
       let repVar = this.state.repertoar;    
    
    return (

      <Router>
        <div className="">                 
          <Route path={"/"} component={Root}/>
          <Route exact path={"/"} render={props => <Repertoar {...props} repertoar={repVar}/>}/>        
          <Route path={"/home"} component={Home}/>
          <Route path={"/repertoar"} render={props => <Repertoar {...props} repertoar={repVar}/>}/>
          <Route path={"/prices"} component={Prices}/>
          <Route path={"/contact"} component={Contact}/>
        </div>
     </Router>
    );
  }

}

export default App;
