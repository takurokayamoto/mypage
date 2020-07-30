import React from "react";

function DefaultHeader(props) {
    return (
        <div className="btn-header nav-bg-color">
            <button className="btn-header nav-bg-color" onClick={props.navIconClick}>
                <i className="fas fa-bars navIcon nav-icon-color"></i>
            </button>
        </div>
    );
}

export default DefaultHeader;
