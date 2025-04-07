import React from "react";
import './skills.css'
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What i do</span>
            <span className="skillDesc">description</span>
            <div className="skillBars" >
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h3>Front-end/Back-end Development</h3>
                        <p>App and Webapp development using Flutter, css, React.js, html. Basics in JAVA,Python</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h3>Projects</h3>
                        <p>demo text</p>
                    </div>
                </div><div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h3>Skills</h3>
                        <p>demo text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;