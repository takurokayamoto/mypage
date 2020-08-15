import React from "react";
import AboutTitle from "./AboutTitle";
import AboutExperience from "./AboutExperience";
import gumgumLogo from "../../source/gumgum_logo.png";
import mdLogo from "../../source/md_logo.jpg";

function Experience() {
    const gumgum = {
        img: gumgumLogo,
        company: "GumGum, Inc.",
        title1: "Client Solutions Associate",
        year1: "(Apr 2020 - Current)",
        title2: "Assistant Account Executive",
        year2: "(Jan 2019 - Mar 2020)",
        achievement: ["Accomplished collaborative project with Mizuho bank and analyised big data with Python", "Accomplished collaborative project with Mizuho bank and analyised big data with Python", "Accomplished collaborative project with Mizuho bank and analyised big data with Python", "Accomplished collaborative project with Mizuho bank and analyised big data with Python", "Accomplished collaborative project with Mizuho bank and analyised big data with Python"],
    };
    const md = {
        img: mdLogo,
        company: "Market Drive, Inc.",
        title1: "Client Solutions Associate",
        year1: "(Apr 2020 - Current)",
        achievement: ["Accomplished collaborative project with Mizuho bank and analyised big data with Python", "Accomplished collaborative project with Mizuho bank and analyised big data with Python", "Accomplished collaborative project with Mizuho bank and analyised big data with Python"],
    };

    return (
        <div className="aboutThird">
            <AboutTitle page="Experience" number="02" />
            <AboutExperience img={gumgum.img} company={gumgum.company} title1={gumgum.title1} year1={gumgum.year1} title2={gumgum.title2} year2={gumgum.year2} achievement={gumgum.achievement} />
            <AboutExperience img={md.img} company={md.company} title1={md.title1} year1={md.year1} achievement={md.achievement} />
        </div>
    );
}

export default Experience;
