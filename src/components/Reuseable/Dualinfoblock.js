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
                 this is my new gatsby website
             </p>  
             </div>
             <div className="col-4">
                        <div className="card bg-dark" >
            <img src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?cs=srgb&dl=code-coding-connection-943096.jpg&fm=jpg" class="card-img-top" alt="my image"/>
            <div className="card-body">
                <h5 className="card-title text-success">click photos</h5>
                <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-warning btn-block">{heading}</a>
            </div>
</div>
             </div>

             </div>
         </div>   
        </section>
    )
}
