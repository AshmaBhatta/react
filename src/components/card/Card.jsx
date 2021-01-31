import React from "react";
import './card-style.css'



 const Card =props =>{
    return(
        <div className="frame">
        <div className="card text-center">
            <div className="card-body text-dark">
            <h4 className ="card-title">
            {props.title}
            </h4>
            <p className="card-text text-secondary">{props.text}</p>
               <a href ={props.link} className = "btn btn-outline-success">{props.btn}</a>
            </div>
        </div>
        </div>
       
    );
}


export default Card;

