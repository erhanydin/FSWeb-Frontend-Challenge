import './App.css';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

import { LanguageContext } from './contexts/LanguageContext';
import { ThemeContext } from 'styled-components';

import HeaderComponent from './components/HeaderComponent';
import PersonalComponent from './components/PersonalComponent';
import ProfileComponent from './components/ProfileComponent';
import SkillsComponent from './components/SkillsComponent';
import ProjectsComponents from './components/ProjectsComponent';
import FooterComponent from './components/FooterComponent';



function App() {


  const [language, setLanguage] = useState("eng");
  const [theme, setTheme] = useState("light");


  const handleTheme = () => {
    setTheme((current) => current === "light" ? "dark" : "light");
  }





  const handleLanguage = () => {
    if (language === "tr") {
      setLanguage("eng");
    } else {
      setLanguage("tr");
    }
  }






  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }





  return (

    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <LanguageContext.Provider value={{ language, handleLanguage }}>
        <div className="App" id={theme}>
          <main>
            <HeaderComponent handleClick={handleClick} ref1={ref1} ref2={ref2} ref3={ref3} />
            <PersonalComponent />
            <SkillsComponent />
            <hr className='page-divider' />
            <ProfileComponent ref1={ref1} />
            <hr className='page-divider' />
            <ProjectsComponents ref2={ref2} />
            <FooterComponent ref3={ref3} />
          </main>

        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
