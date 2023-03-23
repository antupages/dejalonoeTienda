import React from "react";
import {Routes, Route, Link } from "react-router-dom";

function Navbar (){
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#"><img src="./LOGO.png" alt="DeJaloNoe" className="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/" className="nav-Link btn btn-danger" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/remeras" className="nav-Link btn btn-danger" href="#">Remeras</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/basos" className="nav-Link btn btn-danger" href="#">Basos</Link>
                    </li>

                </ul>
              </div>
            </div>
        </nav>
      </div>
	  )	

}

export default Navbar;


/*	                
import Stiker from "../../Stiker";

<li className="nav-item">
  <Link to="/Stiker" className="nav-Link btn btn-danger" href="#">Stiker</Link>
</li>	
                

<Route path="/Stiker" exact element={<Stiker/>}/>
                    
                    */


