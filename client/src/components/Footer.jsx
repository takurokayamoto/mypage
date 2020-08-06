import React from "react";

function Footer() {
    const thisYear = new Date().getFullYear();

    return (
        <div className="footer">
            <p className="myName">Takuro Kayamoto ©︎ {thisYear}</p>
        </div>
    );
}

export default Footer;
