import React from "react";
import "../App";
import "./PhotoCard.css";

const PhotoCard = (props) => {
    const {image} = props;
    return(
        <div className="photo-card">
            <h3>{image.title}</h3>
            <p>Date: {image.date}</p>
            <img className="photo" alt="Nasa's photo of the day." src={image.url} /> 
            <p className="photo-description">{image.explanation }</p>
        </div>
    );
};

export default PhotoCard;