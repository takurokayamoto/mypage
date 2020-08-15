import React, { useEffect } from "react";
import Header from "../homeRoute/Header";
import Footer from "../homeRoute/Footer";
import AboutFirst from "./AboutFirst";
import Education from "./AboutSecond";
import Experience from "./AboutThird";
import Fade from "@material-ui/core/Fade";

function About() {
    useEffect(() => {
        setTimeout(() => {
            document.body.classList = "body";
        }, 0.01);
    }, []);
    return (
        <Fade in={true} timeout={{ enter: 500 }}>
            <div className="aboutPage">
                <Header />
                <AboutFirst />
                <Education />
                <Experience />
                <Footer />
            </div>
        </Fade>
    );
}

export default About;
