import React from "react";

function Cards(props) {
    return(
        
        <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div className="container">
            <h2>{props.name}.
            <i class={props.iconn}></i>
            </h2>
        </div>
        </a>
    );
}

export default Cards;