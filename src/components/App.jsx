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
            />
            <Cards
            name = {links[1].name}
            url = {links[1].url}
            />
            <Cards
            name = {links[2].name}
            url = {links[2].url}
            />
            <Cards
            name = {links[3].name}
            url = {links[3].url}
            />

        <Footer />
        </div>
    );
}

export default App;