import { dataHeader } from "../data/dataHeader";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "styled-components";
import resMenu from '../images/res-menu.png'
import { dataHeaderTr } from "../data/dataHeader";
import ReactSwith from 'react-switch'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function HeaderComponent(props) {
    const { handleClick } = props;

    const { handleLanguage, language } = useContext(LanguageContext);
    const { handleTheme, theme } = useContext(ThemeContext);

    const [responsive, setResponsive] = useState("")

    /* responsive bar */

    const handleResponsive = () => {
        if(responsive === "responsive") {
            setResponsive("");
        } else {
            setResponsive("responsive");
        }
    }


    return (
        <header id={theme} className="">
            <nav className={responsive}>
                <div className="btn-main-container">
                    <Link className='btn-main' to="/">{language === "tr" ? dataHeaderTr.navbarName : dataHeader.navbarName}</Link>
                </div>
                <div  className="buttons-container">
                    <ul>
                        <li  className="nav-item">
                            <Link  id={theme}  onClick={() => handleClick(props.ref1)} className='buttons' to="/about">{language === "tr" ? dataHeaderTr.navbarButtonSkills : dataHeader.navbarButtonSkills}</Link>
                        </li>
                        <li  className="nav-item">
                            <Link  id={theme}  onClick={() => handleClick(props.ref2)} className='buttons' to="/projects">{language === "tr" ? dataHeaderTr.navbarButtonProjects : dataHeader.navbarButtonProjects}</Link>
                        </li>
                        <li  className="nav-item">
                            <Link onClick={() => handleClick(props.ref3)} id="button-hire-me" className={`buttons ${theme}`} to="/hire-me">{language === "tr" ? dataHeaderTr.navbarButtonHireMe : dataHeader.navbarButtonHireMe}</Link>

                        </li>
                        <li  className="nav-item">
                            <a  id={theme} href="#" className="buttons" onClick={() => handleLanguage()}>{language === "tr" ? "eng".toUpperCase() : "tr".toUpperCase()}</a>
                        </li>
                        <li  className="nav-item">
                            <ReactSwith
                                id={theme}
                                checked={theme === "dark"}
                                onChange={handleTheme}
                                className="buttons"
                            />
                        </li>
                        <li  className="nav-item">
                            <FontAwesomeIcon  onClick={handleResponsive} id="bar" className="buttons" icon={faBars} />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    );
}