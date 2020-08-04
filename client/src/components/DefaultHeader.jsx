import React from "react";
import Zoom from "@material-ui/core/Zoom";


function DefaultHeader(props) {
    return (
        <Zoom in={true} timeout={{ enter: 900 }}>
        <div className="headerDiv">
            <button className="btn-header" onClick={props.navIconClick}>
                <i className="fas fa-bars navIcon nav-icon-color"></i>
            </button>
        </div>
        </ Zoom>
    );
}

export default DefaultHeader;
