import React, { useEffect } from "react";
import Header from "../homeRoute/Header";
import Footer from "../homeRoute/Footer";
import Clock from "./Clock"

function Work() {
    useEffect(() => {
        setTimeout(() => {
            document.body.classList = "body";
        }, 0.01);
    }, []);

    return (
        <div className="workPage">
            <Header />
            <h1 className="coming">Coming Soon . . .</h1>
            <Clock />
            <Footer />
        </div>
    );
}

export default Work;
