import React from "react";

function AboutEducation(props) {
    return (
        <div className="AboutEducation">
            <img className="uniLogo" src={props.img} alt="university logo"></img>
            <div className="uniText">
                <h1 className="uniName">{props.university}</h1>
                <h2 className="uniDegree">
                    <span className="degreeName">{props.degree}</span>
                    <span className="uniYear">{props.year}</span>
                </h2>
                <ul className="uniAchievement">
                    {props.achievement.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default AboutEducation;
