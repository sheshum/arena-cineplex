import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {getRepertoarList} from "../actions/index";

import "./Repertoar.css";

import RepItem from "../components/RepItem";

class Repertoar extends Component{

     constructor(props){
        super(props);   

        this.props.getRepertoarList();
        console.log('repertoar constructor');
        
    } 
    
    
    componentWillMount(){
       
    }

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



function mapDispatchToProps(dispatch){
        return bindActionCreators({ getRepertoarList: getRepertoarList }, dispatch);
}

function mapStateToProps(state){
    return {
        repertoar: state.repertoar
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Repertoar);
