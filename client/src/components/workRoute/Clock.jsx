import React, { useState } from "react";

function Clock() {
    const [state, setState] = useState({
        time: "00:00:00",
        amPm: "am",
    });

    setInterval(getTime(), 1000);

    function getTime() {
        const takeTwelve = (n) => (n > 12 ? n - 12 : n),
            addZero = (n) => (n < 10 ? "0" + n : n);

        setInterval(() => {
            let d, h, m, s, t, amPm;

            d = new Date();
            h = addZero(takeTwelve(d.getHours()));
            m = addZero(d.getMinutes());
            s = addZero(d.getSeconds());
            t = `${h}:${m}:${s}`;

            amPm = d.getHours() >= 12 ? "pm" : "am";

            setState({
                time: t,
                amPm: amPm,
            });
        }, 1000);
    }

    return (
        <div className="outer">
            <div className="inner">
                <div className="most-inner">
                    <span className={state.time === "00:00:00" ? "time blink" : "time"}> {state.time}</span>
                    <span className="amPm">{state.amPm}</span>
                </div>
            </div>
        </div>
    );
}

export default Clock;
