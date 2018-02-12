import React from 'react';
import {Component} from 'react';

//const API_KEY = "AIzaSyCh3paNqZNFuR_eYyoWS353JNQiW9lNiNY";
const videoId = "ZRiPQ8YNrVs";
//const videoId = "FKd_ks0rdAM";
const url = `https://www.youtube.com/embed/${videoId}`;
//const base_url = "https://www.youtube.com/embed/";


class Details extends Component{
   
    
    render(){
        //let videoId = this.props.item.videoId;
        //let url = base_url + videoId;
        return(
            <div className="container">
                <h1>Detalji</h1>

                <div className="video-detail col-md-8">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe width="420" height="315" title="insert_title" className="embed-responsive-item" src={url}></iframe>
                        </div>
                        <div style={{color: "white"}} className="row">
                            <div className="col-md-4" >lista podataka</div>
                            <div className="col-md-8">Sinopsis</div>
                        </div>
                </div>

            </div>
        );
    }
}

export default Details;