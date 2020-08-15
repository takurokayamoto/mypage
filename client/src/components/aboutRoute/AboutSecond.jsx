import React from "react";
import AboutTitle from "./AboutTitle";
import AboutEducation from "./AboutEducation";
import wasedaImg from "../../source/Waseda_logo.png";
import adelaideImg from "../../source/adelaideUni_logo.png";

function Education() {
    const waseda = {
        img: wasedaImg,
        name: "Waseda University",
        degree: "Bachelor of Sociology",
        year: "(Apr 2015 - Mar 2020)",
        achievement: ["Accomplished collaborative project with Mizuho bank and analyised big data with Python", "Aquire communication skills, both written and verbal, developed through numerous tasks in the seminars", "Proficiency in all areas of Google Drives, plus Microsoft Office, including Excel, Word and PowerPoint"],
    };

    const adelaide = {
        img: adelaideImg,
        name: "the University of Adelaide",
        degree: "Exchange Program",
        year: "(July 2016 - Aug 2017)",
        achievement: ["Analytical and conceptual thinking, with a conscientious approach to managing workloads", "Understanding of others; something vital to working and succeeding in the global business world", "Provided free Japanese lessons for a semester with the other Australian volunteer."],
    };

    return (
        <div className="aboutSecond">
            <AboutTitle page="Education" number="01" />
            <AboutEducation img={waseda.img} university={waseda.name} degree={waseda.degree} year={waseda.year} achievement={waseda.achievement} />
            <AboutEducation img={adelaide.img} university={adelaide.name} degree={adelaide.degree} year={adelaide.year} achievement={adelaide.achievement} />
        </div>
    );
}

export default Education;
