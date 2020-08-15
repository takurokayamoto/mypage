import React, { useEffect } from "react";
import Header from "../homeRoute/Header";
import Footer from "../homeRoute/Footer";
import imgOffice from "../../source/aboutOffice.jpg";

function About() {
    useEffect(() => {
        setTimeout(() => {
            document.body.classList = "body";
        }, 1);
    }, []);
    return (
        <div className="aboutPage">
            <Header />
            <div className="aboutDiv">
                <img src={imgOffice} className="imgOffice"></img>
                <h1 className="myTitleName">Takuro Kayamoto</h1>
                <div className="leftText">
                    <h1 className="aboutTitle">
                        <span>Specialised in</span>
                        <span>Digital Solutions</span>
                    </h1>
                    <div className="line"></div>
                    <p className="aboutText">I’m very passionate about sales & marketing, especially the changes that have occurred over the past 10 years and how companies can put their brand’s values to their consumers. It’s my job to understand different digital marketing solutions and support brands with powerful strategies.</p>
                </div>
            </div>
            <div className="">
                <h1 style={{ color: "white" }}>About Page</h1>
            </div>
            <Footer />
        </div>
    );
}

export default About;
