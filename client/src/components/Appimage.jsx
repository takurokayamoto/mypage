import React from "react"
// import iphone from "../source/iphoneWithFrame.svg";
import airTicket from "../source/airticket.svg";
import calculator from "../source/calclator.svg";
import sunglasses from "../source/sunglass.svg";
import mappyTitle from "../source/mappyTitle.svg";
import mappyMap from "../source/mappyMap.svg";


function AppImage() {
    return(
<div className="contrainer">
                <div className="row row1">
                    <div className="col-3">
                        <span className="iphoneApp"></span>
                    </div>
                    <div className="col-3">
                        <span className="iphoneApp"></span>
                    </div>
                    <div className="col-3">
                        <img src={mappyMap} className="iphoneApp" alt="sunglassesApp"></img>
                    </div>
                    <div className="col-3">
                        <span className="iphoneApp"></span>
                    </div>
                </div>
                <div className="row row2">
                    <div className="col-3">
                        <span className="iphoneApp"></span>
                    </div>
                    <div className="col-3">
                        <img src={calculator} className="iphoneApp" alt="calculatorApp"></img>
                    </div>
                    <div className="col-3">
                        <span className="iphoneApp"></span>
                    </div>
                    <div className="col-3">
                        <img src={sunglasses} className="iphoneApp" alt="sunglassesApp"></img>
                    </div>
                </div>
                <div className="row row3">
                    <div className="col-3">
                        <img src={mappyMap} className="iphoneApp" alt="sunglassesApp"></img>
                    </div>
                    <div className="col-3">
                        <span className="iphoneApp"></span>
                    </div>
                    <div className="col-3">
                        <img src={airTicket} className="iphoneApp" alt="airTicketApp"></img>
                    </div>
                    <div className="col-3">
                        <span className="iphoneApp"></span>
                    </div>
                </div>
                <div className="row row4">
                    <div className="col-3">
                        <span className="iphoneApp"></span>
                    </div>
                    <div className="col-3">
                        <img src={sunglasses} className="iphoneApp" alt="sunglassesApp"></img>
                    </div>
                    <div className="col-3">
                        <span className="iphoneApp"></span>
                    </div>
                    <div className="col-3">
                        <img src={mappyTitle} className="iphoneApp" alt="sunglassesApp"></img>
                    </div>
                </div>
            </div>

    )
};


export default AppImage