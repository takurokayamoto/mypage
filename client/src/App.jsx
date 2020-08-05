import React from "react";
import Header from "./components/Header";
import Maintop from "./components/Maintop";
import Myname from "./components/MyName";
import MiniContact from "./components/MiniContact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div>
            <Header />
            <Maintop />
            <Myname />
            <MiniContact />
        </div>
    );
}

export default App;
