import React from "react";
import Fade from "@material-ui/core/Fade";

function ExpandHeader(props) {
    return (
        <Fade in={true} timeout={{ enter: 200 }}>
            <div className="expandMenu nav-bg-color nav-position">
                <div className="listWrap">
                    <button className="btn-header-expand nav-bg-color nav-position" onClick={props.navIconClick}>
                        <i className="fas fa-angle-double-left navIcon nav-icon-color"></i>
                    </button>
                    <ul className="navList">
                        <li className="nav-li">
                            <a className="nav-a" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-li">
                            <a className="nav-a" href="/about">
                                About
                            </a>
                        </li>
                        <li className="nav-li">
                            <a className="nav-a" href="/work">
                                Work
                            </a>
                        </li>
                        <li className="nav-li">
                            <a className="nav-a" href="/contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Fade>
    );
}

export default ExpandHeader;
