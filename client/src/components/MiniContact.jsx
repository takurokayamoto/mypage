import React from "react";
import avatar from "../source/avatar.png";
import third from "../source/third.jpg";

function MiniContact() {
    return (
        <div className="thirdPage">
            <img className="third" src={third} alt="third"></img>
            <h1 className="thirdTitle">
                Powerful<br></br>Design.
            </h1>
            <h1 className="topName">Learn more about me</h1>
            <div class="button_cont " align="center">
                <a class="bottomBtn" href="/about" rel="nofollow noopener">
                    About
                </a>
                <a class="bottomBtn" href="/contact" rel="nofollow noopener">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default MiniContact;
