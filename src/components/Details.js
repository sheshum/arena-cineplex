import React from 'react';
import {Component} from 'react';

//const API_KEY = "AIzaSyCh3paNqZNFuR_eYyoWS353JNQiW9lNiNY";
const videoId = "ZRiPQ8YNrVs";
const url = `https://www.youtube.com/embed/${videoId}`;


class Details extends Component{
    render(){
        return(
            <div className="container">
                <h1>Detalji</h1>

                <div className="video-detail col-md-8">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe title="insert_title" className="embed-responsive-item" src={url}></iframe>
                        </div>
                        <div style={{color: "white"}} className="">
                            <div >lista podataka</div>
                            <div>Sinopsis</div>
                        </div>
                </div>

            </div>
        );
    }
}

export default Details;