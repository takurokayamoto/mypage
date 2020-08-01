import React from "react";
import iPhoneImg from "../source/titleIPhone.svg";
import video from "../source/homeVideo.mp4";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Maintop() {
    return (
        <div>
            <div className="container h-100 d-flex justify-content-center titleDiv">
                <h1 className="mainTitle">
                    <span className="design isplay-3 title">Design</span>
                    <span className="matters isplay-3 title">Matters</span>
                </h1>
            </div>
            <div className="container h-100 d-flex justify-content-center">
                <img src={iPhoneImg} className="display-3 iPhoneImg titleAssets" alt="iPhone"></img>
                <video className="display-3 topVideo titleAssets" width="320" height="240" autoPlay="autoplay" loop>
                    <source src={video} type="video/mp4" />
                </video>
                <div>
                    <KeyboardArrowDownIcon className="arrow" style={{ fontSize: 70, color: "#d6d6d6" }} />
                    <KeyboardArrowDownIcon className="arrow" style={{ fontSize: 70, color: "#d6d6d6" }} />
                </div>
            </div>
        </div>
    );
}

export default Maintop;
