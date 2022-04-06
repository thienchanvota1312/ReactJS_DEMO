import React from "react";
import "font-awesome/css/font-awesome.css";

function Footer() {
  return (
    <footer>
       <div className="container">
  	 	<div className="row">
  	 		<div className="col">
  	 			<ul>
                    <h3>Introduce</h3>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">contact</a></li>
  	 				<li><a href="#">copy right</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="col">
  	 			<ul>
                    <h3>Help</h3>
  	 				<li><a href="#">question</a></li>
  	 				<li><a href="#">provition</a></li>
  	 				<li><a href="#">info</a></li>
  	 			</ul>
  	 		</div>
  	 		
  	 		<div className="col">
  	 			<ul>
                    <h3>Type</h3>
  	 				<li><a href="movie">movie</a></li>
  	 				<li><a href="series">series</a></li>
  	 				<li><a href="game">game</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="col">
                <ul>
  	 			<h3>Follow</h3>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fa fa-facebook"></i></a>
  	 				<a href="#"><i className="fa fa-twitter"></i></a>
  	 				<a href="#"><i className="fa fa-instagram"></i></a>
  	 				<a href="#"><i className="fa fa-linkedin"></i></a>
  	 			</div>
                </ul>
  	 	    </div>
        </div>       
  	 </div>
    </footer>
  );
}

export default Footer;