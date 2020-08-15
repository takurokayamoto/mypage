import React from "react";

function AboutTitle(prams) {
    return (
        <div className="AboutTitle">
            <h1 className="aboutNumber">{prams.number}</h1>
            <h1 className="aboutP">{prams.page}</h1>
            <div className="aboutLine"></div>
        </div>
    );
}

export default AboutTitle;
