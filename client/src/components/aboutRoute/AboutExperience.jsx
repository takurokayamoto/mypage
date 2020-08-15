import React from "react";

function AboutExperience(props) {
    return (
        <div className="AboutExperience">
            <img className="companyLogo" src={props.img} alt="company logo"></img>
            <div className="companyText">
                <h1 className="companyName">{props.company}</h1>
                <h2 className="companyTitle">
                    <span className="jobTitle">{props.title1}</span>
                    <span className="companyYear">{props.year1}</span>
                    <br></br>
                    <span className="jobTitle">{props.title2}</span>
                    <span className="companyYear">{props.year2}</span>
                </h2>
                <ul className="companyAchievement">
                    {props.achievement.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default AboutExperience;
