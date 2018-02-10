import React, {Component} from "react";

import "./Repertoar.css";

import RepItem from "./RepItem";

class Repertoar extends Component{

    
    render(){
        
        let repItems;

        if(this.props.repertoar){
            repItems = this.props.repertoar.map((item, i) => {
                
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
        else {
            repItems = "";
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