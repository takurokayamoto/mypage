import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/homeRoute/Home";
import About from "./components/aboutRoute/About";
import Contact from "./components/contactRoute/Contact";
import Work from "./components/workRoute/Work";

function App() {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/contact" component={Contact} />
            </Router>
        </div>
    );
}

export default App;
