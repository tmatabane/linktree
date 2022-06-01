import React from "react";

function Cards(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <a href={props.url}>visit</a>
        </div>
    );
}

export default Cards;