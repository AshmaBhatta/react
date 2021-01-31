import React, { Component } from 'react'
import blogCard from './blogCard';
import img1 from '../images/new.jpg';

export default class CardsBlog extends Component {
    render() {
        return (
           <div className="row">
               <h2 className="card-title">
                   <blogCard title="KIDNEY DONATION AND FUNDRAISING" text="hello"/>
               </h2>
           </div>
        )
    }
}
