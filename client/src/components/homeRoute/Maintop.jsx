import React from "react";
import iPhoneImg from "../../source/titleIPhone.svg";
import video from "../../source/homeVideo.mp4";

function Maintop() {
    return (
        <div>
            <div className="titleDiv">
                <h1 className="mainTitle">
                    <span className="title">Design</span>
                    <span className="title">Matters</span>
                </h1>
                <div className="mainAsset">
                    <img src={iPhoneImg} className="iPhoneImg" alt="iPhone"></img>
                    <video className="topVideo" width="320" height="240" autoPlay="autoplay" loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div>
                    <i className="fas fa-angle-double-down arrow"></i>
                </div>
            </div>
        </div>
    );
}

export default Maintop;
