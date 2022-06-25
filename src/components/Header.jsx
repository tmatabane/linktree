import React from "react";
import "./styles.css"

const currentTime = new Date();

const hrs = currentTime.getHours();

const min = currentTime.getMinutes();

const time = hrs + ":" +  min + "";

function Header() {
    return(<div><h2>{time} - SAST</h2><header><h1 className="heading">Morning an Aspring Software Engineer's Linktree</h1></header></div>);
}

export default Header;