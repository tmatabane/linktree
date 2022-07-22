import React, { useState } from "react";
import links from "../links";
import Cards from "./Cards";
import Header from "./Header";
import Footer from "./Footer";
import handleTime from "../time";
import "./css/styles.css";

function App() {

    let currentTyme = new Date();

    setInterval(getCurrentTime, 1000);

    const [tyme, setTime] = useState(currentTyme);

    function getCurrentTime() {
        currentTyme = new Date();
        setTime(currentTyme);
    }

    // deconstruction the values returned from time.js function handleTime()
    const { currentTime, periodOfDay, themeColor,
        containerTheme, textColor } = handleTime(tyme);

    return (
        <div>
            <Header

                time={currentTime}
                greeting={periodOfDay}
                headerColor={themeColor}

                />

            {links.map((links) => {
                return (<Cards
                    id={links.id}
                    name={links.name}
                    url={links.url}
                    iconn={links.iconn}
                    textTheme={textColor}
                    container={containerTheme}
                />);

            })}

            <Footer />
        </div>
    );
}

export default App;