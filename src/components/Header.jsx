import React from "react";
import "./css/styles.css";

function Header(props) {
    return (<div><h2 id="sastTime">{props.time} - SAST</h2><header><h1 className={props.headerColor}>{props.greeting}, an Aspring Software Engineer's Linktree</h1></header></div>);
}

export default Header;