import React, {Component} from "react";
import "./Repertoar.css";

class Repertoar extends Component{
    render(){
        return(
            <div className="container">
                <h1>Repertoar</h1>
                <hr/>
                <ul className="replist">
                    <li className="col-md-12 rep-item">
                      <div className="margin-o">
                         <div className="col-md-3 center">
                          <a href="#"><img className="rep-img" src="http://www.arenacineplex.com/images/icons_66x96/1517994083pecinci.jpg" alt=""/></a>
                         </div>
                         <div className="col-md-5">
                            <div className="details-header">
                            <h3>Pecinci 2D Sinhronizovano</h3>
                            <p>Early Man 2D</p>
                            </div>
                             <div className="info-blok">
                               <div><strong>Reziser: </strong>Nick </div>
                               <div><strong>Glumci: </strong>Nick </div>
                               <div><strong>Zanr: </strong>Nick </div>
                               <div><strong>Trajanje: </strong>Nick </div>
                               <div><strong>Distributer: </strong>Nick </div>
                               <div><strong>Zemlja porekla: </strong>Nick </div>
                               <div><strong>Godina Proizvodnje: </strong>Nick </div>
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

                </ul>
                
            </div>
        );
    }
}

export default Repertoar;