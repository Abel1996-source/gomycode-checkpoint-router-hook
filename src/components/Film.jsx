import React from "react";
import { Link } from "react-router-dom";
const Film=(props)=>{
    return(
        <>
            <div className="container">
                <div className="card">
                    <div className="head-card">
                        
                        <Link to={`details/${props.film.id}`} >
                             <img src={props.film.image} alt="film" />
                        </Link>
                    </div>
                    <div className="body-card">
                        <div className="name">
                            <h4>{props.film.title} </h4>
                        </div>
                        <div className="elt">
                            <span className="duration">{props.film.duration} </span>
                           <p>{props.film.description} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Film;