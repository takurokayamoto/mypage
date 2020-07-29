import React from "react";
import ExpandHeader from "./ExpandHeader";
import Button from "react-bootstrap/Button";

function Header() {
    return (
        <header>
            <ExpandHeader />
            <div class="navbar navbar-dark shadow-sm navbar-background">
                <div class="container d-flex justify-content-between">
                    <a href="#" class="navbar-brand d-flex align-items-center">
                        <strong>Takuro Kayamoto</strong>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
