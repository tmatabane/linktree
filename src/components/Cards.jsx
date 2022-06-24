import React from "react";

function Cards(props) {
    return(
        
        <a href={props.url}>
        <div className="container">
            <h1>{props.name}.
            <i class={props.iconn}></i>
            </h1>
        </div>
        </a>
    );
}

export default Cards;