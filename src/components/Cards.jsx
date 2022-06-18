import React from "react";

function Cards(props) {
    return(
        < div className="container">
        
        <a href={props.url}>
        <div className="card">
            <h1>{props.name}.
            <i class={props.iconn}></i>
            </h1>
        </div>
        </a>
        </div>
    );
}

export default Cards;