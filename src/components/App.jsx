import React from "react";
import links from "../links";
import Cards from "./Cards";
import Header from "./Header";
import Footer from "./Footer";


function App() {
    return (
        <div>
        <Header />
            <Cards
            name = {links[0].name}
            url = {links[0].url}
            iconn = {links[0].iconn}
            />
            <Cards
            name = {links[1].name}
            url = {links[1].url}
            iconn = {links[1].iconn}
            />
            <Cards
            name = {links[2].name}
            url = {links[2].url}
            iconn = {links[2].iconn}
            />
            <Cards
            name = {links[3].name}
            url = {links[3].url}
            iconn = {links[3].iconn}
            />

        <Footer />
        </div>
    );
}

export default App;