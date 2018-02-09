import React, {Component} from "react";
import axios from "axios";
import "./Repertoar.css";

import RepItem from "./RepItem";

class Repertoar extends Component{

    constructor(props){
        super(props);
      
        this.state = {
            repertoar: [],
          
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

    
    
    
    render(){
        
        let repItems;
     
        if(true){
            repItems = this.state.repertoar.map((item, i) => {
                
                return(
                    <div key={i}>
                        <RepItem item={item} />
                        <div className="col-md-12">
                            <hr/>
                        </div>
                    </div>
                );
            });

          
        }

        return(
            <div className="container">
                <h1>Repertoar</h1>
                <hr/>
                <ul className="replist">
                    {repItems}       
                </ul>
                
            </div>
        );
    }
}

export default Repertoar;