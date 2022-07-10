import React from "react";
import links from "../links";
import Cards from "./Cards";
import Header from "./Header";
import Footer from "./Footer";
import themeInfo, {linkColor} from "../time";
import "./css/styles.css";



function createCard(links) {
    return (<Cards
        id={links.id}
        name={links.name}
        url={links.url}
        iconn={links.iconn}
        textTheme = {linkColor}
        container={themeInfo.containerTheme}
    />);

}


function App() {
    return (
        <div>
            <Header
                time = {themeInfo.currentTime}
                greeting = {themeInfo.periodOfDay}
                headerColor = {themeInfo.themeColor}

            />

            {links.map(createCard)}

            <Footer />
        </div>
    );
}

export default App;