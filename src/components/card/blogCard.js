import React from 'react';
import './card-style.css';

const blogCard = props =>{
    return(
        <div className="card-bodd">
            <div className="card-sizee">
            <h4 className ="card-title">
            {props.title}
            </h4>
            <p className="card-text text-secondary">{props.text}</p>
               
               </div>
            </div>
    );

}
export default blogCard;