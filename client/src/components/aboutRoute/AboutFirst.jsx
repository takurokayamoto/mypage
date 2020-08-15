import React from "react";
import imgOffice from "../../source/aboutOffice.jpg";

function AboutFirst() {
    return (
        <div className="aboutDiv">
            <img src={imgOffice} alt="officeImg" className="imgOffice"></img>
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
    );
}

export default AboutFirst;
