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
        achievement: ["Made more than a few strategic sales proposals that help the sales team to win campaigns", "Provided client and opportunity related insights to keep the sales team informed", "Achieved $140K in sales revenue when I was an Intern.", "Helped the Marketing team with Covid-19 reports, sales collaterals, etc."],
    };
    const md = {
        img: mdLogo,
        company: "Market Drive, Inc.",
        title1: "Client Solutions Associate",
        year1: "(Apr 2020 - Current)",
        achievement: ["Managed a YouTube account with 110K+ subscribers", "Excelled in this high-pressure environment while working with many other team members to create a high-quality final cut", "Assembled and analysed traffic source and audience data, developed quarterly marketing reports"],
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
