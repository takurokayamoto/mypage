import React from "react";
import AboutTitle from "./AboutTitle";
import FrontEndIcon from "./FrontEndIcon";
import BackEndIcon from "./BackEndIcon";

function Skills() {
    return (
        <div className="aboutThird">
            <AboutTitle page="Skills" number="03" />

            <FrontEndIcon />
            <BackEndIcon />
            <div className="" align="center">
                <a className="bottomBtn" href="/contact" rel="nofollow noopener">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default Skills;
