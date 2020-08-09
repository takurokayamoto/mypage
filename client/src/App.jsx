import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/homeRoute/Home";
import About from "./components/aboutRoute/About";

function App() {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </Router>
        </div>
    );
}

export default App;
