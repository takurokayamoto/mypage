import React, { useEffect } from "react";

function Loader() {
    const [load, setLoad] = React.useState(false);
    const [end, setEnd] = React.useState(false);
    // const [className, setClassName] = React.useState("loader-wrapper");

    const beforeLoad = "loader-wrapper";
    const afterLoad = "loader-wrapper fadeout";
    const loadEnd = "load-end";
    //1 onload -> timer start
    //2  2.5 sec -> setLoad(true)
    //3 change the style.display:flext --> none

    useEffect(() => {
        setTimeout(() => {
            setLoad(true);
            setTimeout(() => {
                setEnd(true)
            }, 900);
        }, 2500);
    }, []);

    console.log(load);
    return (
        <div className={end? loadEnd : null}>
            <div className={load ? afterLoad : beforeLoad}>
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
        </div>
    );
}

export default Loader;
