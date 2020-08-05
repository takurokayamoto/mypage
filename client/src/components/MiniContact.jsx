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
            <h1>Takuro Kayamoto</h1>
            <div class="button_cont" align="center">
                <a class="example_b" href="/about" rel="nofollow noopener">
                    About
                </a>
            </div>
            <div class="button_cont" align="center">
                <a class="example_b" href="/contact" rel="nofollow noopener">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default MiniContact;
