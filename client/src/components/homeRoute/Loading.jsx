import React, { useEffect } from "react";

function Loader() {
        const [load, setLoad] = React.useState(false)
        let className = "loader-wrapper";

        // Similar to componentDidMount and componentDidUpdate:
        useEffect(() => {
            //1 onload -> timer start

            //2  2.5 sec -> setLoad(true)
            
            //3 change the style.display:flext --> none
            if (load === true) {
                className = "load-end"
            }
        });



    return (
        <div className={className}>
            <h2 className="loader-text">
                <span>l</span>
                <span>e</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>t</span>
                <span>h</span>
                <span>e</span>
                <span>&nbsp;</span>
                <span>u</span>
                <span>s</span>
                <span>e</span>
                <span>r</span>
                <span>s</span>
                <span>&nbsp;</span>
                <span>d</span>
                <span>e</span>
                <span>c</span>
                <span>i</span>
                <span>d</span>
                <span>e</span>
            </h2>
        </div>
    );
}

export default Loader;
