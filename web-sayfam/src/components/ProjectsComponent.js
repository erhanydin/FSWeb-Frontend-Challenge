import { dataProjects } from '../data/dataProjects';
import { dataProjectsTr } from '../data/dataProjects';

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from 'styled-components';

export default function ProjectsComponents(props) {


    const {language} = useContext(LanguageContext);
    const {theme} = useContext(ThemeContext);

    
        
    

    return (
        <section id={theme} ref={props.ref2} className='section-projects'>
            <h2>{language === "tr" ? "Projeleri" : "Projects" }</h2>
            <div className='section-projects-container'>
                {(language === "tr" ? dataProjectsTr : dataProjects).map((project, index) => (

                    <div key={index} className='section-projects-container-2'>
                        <img src={project.projectImg} alt="res" />
                        <h3>{project.projectTitle}</h3>
                        <div className='project-explanation'>{project.projectDetails}</div>
                        <div>
                            <button className='projects-buttons'>{project.projectRelatedTopics1}</button>
                            <button className='projects-buttons'>{project.projectRelatedTopics2}</button>
                            <button className='projects-buttons'>{project.projectRelatedTopics3}</button>
                        </div>
                        <div className='project-links'>
                            <a href={project.projectGithub} target="_blank">Github</a>
                            <a href={project.projectWiewSite} target="_blank">View Site</a>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
}