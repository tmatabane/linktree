import React from "react";
import "./styles.css"

const currentTime = new Date();

const hrs = currentTime.getHours();

const min = currentTime.getMinutes();

const time = hrs + ":" + min + "";

let greeting = "";


if (currentTime < 12) {
    greeting = "Morning";
} else if (currentTime < 18) {
    greeting = "Afternoon";

} else {
    greeting = "Evening";

}

function Header() {
    return (<div><h2>{time} - SAST</h2><header><h1 className="heading">{greeting} an Aspring Software Engineer's Linktree</h1></header></div>);
}

export default Header;