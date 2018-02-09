import React, { Component } from 'react';

class RepItem extends Component{

    
    
    constructor(props){
        super(props);

        this.state = {
            item: props.item
        }
    }

    render(){

        if(this.props.item){
            var image = this.props.item.imgURl;
            var title = this.props.item.title;
            var titleOrig = this.props.item.titleOrig;
            var director = this.props.item.director;
            var actors = this.props.item.actors;
            var genre = this.props.item.genre;
            var duration = this.props.item.duration;
            var distributer = this.props.item.distributer;
            var country = this.props.item.country;
            var year = this.props.item.year;
        }

        return (

                <li className="col-md-12 rep-item">
                    <div className="margin-o">
                    <div className="col-md-3 center">
                        <a href="#"><img className="rep-img" src={image} alt=""/></a>
                    </div>
                    <div className="col-md-5">
                        <div className="details-header">
                        <h3>{title}</h3>
                        <p>{titleOrig}</p>
                        </div>
                        <div className="info-blok">
                            <div><strong>Reziser: </strong>{director} </div>
                            <div><strong>Glumci: </strong>{actors} </div>
                            <div><strong>Zanr: </strong>{genre} </div>
                            <div><strong>Trajanje: </strong>{duration} </div>
                            <div><strong>Distributer: </strong>{distributer} </div>
                            <div><strong>Zemlja porekla: </strong>{country} </div>
                            <div><strong>Godina Proizvodnje: </strong>{year} </div>
                            <div className="btn_details"><a><button className="btn btn-lg btn-default btn-block">Detaljnije</button></a></div>
                        </div>
                    </div>
                    <div className="col-md-4 center">
                        <h3>Izaberi vreme projekcije</h3>
                        <a className="btn btn-xlg btn-default"><h3>14:30</h3>300 RSD<span>
                            <hr className="nomargin nopadding"/><strong>Sala: </strong>2</span></a>
                        <a className="btn btn-xlg btn-default"><h3>14:30</h3>300 RSD<span>
                            <hr className="nomargin nopadding"/><strong>Sala: </strong>2</span></a>
                        
                    </div>
                    </div>
                </li>
        );
    }

}

export default RepItem;