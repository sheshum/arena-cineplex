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
                         <div className="col-md-3">
                          <a href="#"><img className="rep-img" src="http://www.arenacineplex.com/images/icons_66x96/1517994083pecinci.jpg" alt=""/></a>
                         </div>
                         <div className="col-md-5">
                            <h3>Pecinci 2D Sinhronizovano</h3>
                            <p>Early Man 2D</p>
                         </div>
                         <div className="col-md-4"><h3>Time</h3></div>
                        </div>
                    </li>

                </ul>
                
            </div>
        );
    }
}

export default Repertoar;