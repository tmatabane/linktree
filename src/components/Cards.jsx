import React from "react";

function Cards(props) {
    return(
        < div className="container">
        <div className="card">
            <h1>{props.name}</h1>
            <a href={props.url}>visit</a>
        </div>
        </div>
    );
}

export default Cards;