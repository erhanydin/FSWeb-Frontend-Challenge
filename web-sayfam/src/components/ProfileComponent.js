import { profileAboutMe } from "../data/profileData";
import { profileAboutMeTr } from "../data/profileData";

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "styled-components";

export default function ProfileComponent(props) {

    const {language} = useContext(LanguageContext);
    const {theme} = useContext(ThemeContext)


    return (
        <section id={theme} className='section-profile'>
            <h2 ref={props.ref1}>{language === "tr" ? "Hakkında" : "Profile"}</h2>
            <div className='section-profile-container'>


                <div>
                    <div>
                        <h3>{language === "tr" ? "Kişisel Bilgiler" : "Profile"}</h3>
                    </div>

                    <div className='profile-contents-left'>
                        <div className='profile-contents-ques'>
                            <p><span>{language === "tr" ? "Doğum Tarihi" : "Date of Birth"}</span></p>
                            <p><span>{language === "tr" ? "İkamet Şehri" : "Home City"}</span></p>
                            <p><span>{language === "tr" ? "Eğitim Durumu" : "Education Background"}</span></p>

                            <p className='tercih'><span>{language === "tr" ? "Tercih Ettiği Rol" : "Prefered Role"}</span></p>
                        </div>

                        <div className='profile-content-ans'>
                            <p>11.08.1999</p>
                            <p>İstanbul</p>
                            <p>{language === "tr" ? "Sakarya Üniversitesi" : "Sakarya Uni"}</p>
                            <p>{language === "tr" ? "Elektronik Mühendisliği" : "Electronic Eng"}</p>
                            <p className="profile-down">Frontend, UI/UX</p>
                        </div>
                    </div>

                </div>


                <div className='profile-contents-right'>
                    <h3 className='header-about-me'>{language === "tr" ? "Hakkında" : "About Me"}</h3>
                    <div>
                        <p id={theme}>{language === "tr" ? profileAboutMeTr.first : profileAboutMe.first}</p>
                        <p id={theme}>{language === "tr" ? profileAboutMeTr.second : profileAboutMe.second}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}