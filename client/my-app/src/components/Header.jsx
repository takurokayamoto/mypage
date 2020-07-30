import React from "react";
import ExpandHeader from "./ExpandHeader";
import DefaultHeader from "./DefaultHeader";

function Header() {
    const [navClick, setNavClick] = React.useState(false);

    function navIconClick() {
        navClick ? setNavClick(false) : setNavClick(true);
    }

    return (
        <header>
            {navClick ? <ExpandHeader navIconClick={navIconClick} /> : null}

            <DefaultHeader navIconClick={navIconClick} />
        </header>
    );
}

export default Header;
