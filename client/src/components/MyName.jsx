import React from "react";
import airTicket from "../source/airticket.svg";
import calculator from "../source/calclator.svg";
import sunglasses from "../source/sunglass.svg";

function Myname() {
    return (
        <div className="secondPage">
            <h1 className="secondTitle">
                <span className="blueTitle">Hi there. </span>
                <span className="whiteTitle">I'm Tak,</span><br></br>
                <span className="whiteTitle">a UI designer and</span><br></br>
                <span className="whiteTitle">a web developer.</span><br></br>
            </h1>

            <div>
            <img src={airTicket} className="iphoneApp" alt="airTicketApp"></img>
            <img src={calculator} className="iphoneApp" alt="calculatorApp"></img>
            <img src={sunglasses} className="iphoneApp" alt="sunglassesApp"></img>

            </div>



            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>

        
    );
}


export default Myname