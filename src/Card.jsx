import React from "react";
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

const Card = (Props) => {

    return (
        <>
            <div className="carWidht">
                <div className="card" >
                    <img src={Props.imgurl} className="card-img-top imgSize" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{Props.title}</h5>
                        <p className="card-text">{Props.description}</p>
                        <a href="#" className="btn btn-primary">Detail...</a>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Card;