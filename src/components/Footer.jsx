import React from "react";
import "font-awesome/css/font-awesome.css";
import { FOLLOW, HELP, HOME, TYPE } from "../constants/constan";

function Footer() {
  return (
    <footer>
       <div className="container">
  	 	<div className="row">
  	 		<div className="col">
  	 			<ul>
                    <li><a href="home"><h3>{HOME}</h3></a></li>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">contact</a></li>
  	 				<li><a href="#">copy right</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="col">
  	 			<ul>
                    <h3>{HELP}</h3>
  	 				<li><a href="#">question</a></li>
  	 				<li><a href="#">provition</a></li>
  	 				<li><a href="#">info</a></li>
  	 			</ul>
  	 		</div>
  	 		
  	 		<div className="col">
  	 			<ul>
                    <h3>{TYPE}</h3>
  	 				<li><a href="movie">movie</a></li>
  	 				<li><a href="series">series</a></li>
  	 				<li><a href="game">game</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="col">
                <ul>
  	 			<h3>{FOLLOW}</h3>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fa fa-facebook"></i></a>
  	 				<a href="#"><i className="fa fa-twitter"></i></a>
  	 				<a href="#"><i className="fa fa-instagram"></i></a>
  	 			</div>
                </ul>
  	 	    </div>
        </div>
          <p>
            &copy;{new Date().getFullYear()} Copyright ThiPD1 | All rights reserved 
          </p>     
  	 </div>
    </footer>
  );
}

export default Footer;