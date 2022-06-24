import React from "react";
import links from "../links";
import Cards from "./Cards";
import Header from "./Header";
import Footer from "./Footer";

function createCard(links) {
    return(<Cards 
        id={links.id}
        name = {links.name}
        url = {links.url}
        iconn = {links.iconn}
    />);
    
}
function App() {
    return (
        <div>
        <Header />

        {links.map(createCard)}
        
        <Footer />
        </div>
    );
}

export default App;