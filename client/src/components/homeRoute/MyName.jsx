import React from "react";
import Appimage from "./Appimage";

function Myname() {
    return (
        <div className="secondPage">
            <div className="triangle1"></div>
            <div className="square"></div>
            <h1 className="secondTitle">
                <span className="blueTitle">Hi there. </span>
                <span className="whiteTitle">I'm Tak,</span>
                <br></br>
                <span className="whiteTitle">a UI designer and</span>
                <br></br>
                <span className="whiteTitle">a web developer.</span>
                <br></br>
            </h1>
            <Appimage />
        </div>
    );
}

export default Myname;
