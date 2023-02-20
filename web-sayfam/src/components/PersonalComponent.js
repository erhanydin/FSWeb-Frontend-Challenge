import { Link } from "react-router-dom";

import { DiGithubBadge } from "react-icons/di";
import { SiUpwork } from "react-icons/si";

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "styled-components";

import { dataHeader } from "../data/dataHeader";
import { dataHeaderTr } from "../data/dataHeader";

export default function PersonalComponent(props) {

    const {language} = useContext(LanguageContext);
    const { handleTheme, theme } = useContext(ThemeContext)

    return (

        <section className='section-personal'>
            <div className='section-personal-container'>
                <div id={theme} className='hr-container'>
                    <hr id={theme} />
                    <p>{language === "tr" ? dataHeaderTr.contentName : dataHeader.contentName}</p>
                </div>
                <div id={theme} className='section-personal-headers'>
                    <h2>{dataHeader.contentJobFirst}</h2>
                    <h3>{dataHeader.contentJobSecond}</h3>
                </div>
                <div>
                    <div id={theme} className="content-details">{language === "tr" ? dataHeaderTr.contentDetails : dataHeader.contentDetails}</div>
                </div>
                <div className={theme} id='section-personal-buttons-container'>
                    <Link id='button-hire-me-second' className={theme} to="/hire-me">{language === "tr" ? dataHeaderTr.contentButtonHireMe : dataHeader.contentButtonHireMe}</Link>
                    <a href="https://github.com/erhanydin" target="_blank" className='github-linkedin-button'>
                        <DiGithubBadge className='icons' /> {language === "tr" ? dataHeaderTr.contentButtonGithub : dataHeader.contentButtonGithub}
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01f4877ef5dfa28fb8" target="_blank" id="personal-responsive-lb" className='github-linkedin-button'>
                        <SiUpwork className='icons' /> {language === "tr" ? dataHeaderTr.contentButtonLinkedin : dataHeader.contentButtonLinkedin}
                    </a>
                </div>
            </div>
            <div className="personal-picture-container">
                <div>
                    <img src={dataHeader.contentMainImg} alt="res" />
                </div>
            </div>
        </section>
    );
}