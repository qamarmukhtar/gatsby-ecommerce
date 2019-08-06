import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
         <div className="container">
             <Heading title={heading} />
             <div className="row">
             <div className="col-8 mx-auto">
             <p className="lead text-white mb-5">
             Janatha Transport is Karnataka's pioneer App Based Road Transporter platform that connects users with a network of thousands of Truck Transport drivers for quick and prompt goods delivery solution from Hubballi at your ease.
             </p>  
             </div>
             <div className="col-4">
                        <div className="card bg-dark" >
            <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?cs=srgb&dl=code-coding-connection-943096.jpg&fm=jpg" class="card-img-top" alt="my image"/>
            
            <div className="card-body">
                <h5 className="card-title text-success">
                     <a href="https://play.google.com/store/apps/details?id=com.codingspider.jantatransport.janttrans&hl=en_IN">click photos</a>
                </h5>
                 <p className="card-text text-white">Janatha Tranport android appliation for logistic application.</p>
                
                <a href="https://play.google.com/store/apps/details?id=com.codingspider.jantatransport.janttrans&hl=en_IN" className="btn btn-warning btn-block">{heading}</a>
            </div>
        </div>
             </div>

             </div>
         </div>   
        </section>
    )
}
