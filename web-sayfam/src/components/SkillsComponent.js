import React from "react";

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "styled-components";

import { dataSkills } from "../data/dataSkills";

export default function SkillsComponent(props) {

    const { language } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);

    return (

        <section className='section-skills'>
            <h3 id={theme}>{language === "tr" ? "Becerileri" : "Skills"}</h3>
            <div id={theme} className='section-skills-container'>
                {dataSkills.map((skill, index) => (
                    <div key={index}>
                        <img className='skills' src={skill.logo} alt={skill.skillName} />
                        <p>{skill.skillName}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}