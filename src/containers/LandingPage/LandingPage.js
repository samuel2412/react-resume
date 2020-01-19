import React from 'react';

import Divider from '@material-ui/core/Divider';
import * as Scroll from 'react-scroll';


import Header from '../../components/Header/Header';
import AboutMe from '../../components/AboutMe/AboutMe';
import Work from '../../components/Work/Work';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import Portfolio from '../../components/Portfolio/Portfolio';

const LandingPage = props => {
    const Element = Scroll.Element;

    return (
        <>
            <Element name="home">
                <Header />
            </Element>

            <Element name="about">
                <AboutMe />
            </Element>

            <Element name="work">
                <Work />
            </Element>

            <Divider />

            <Element name="education">
                <Education />
            </Element>

            <Divider />

            <Element name="skill">
                <Skills />
            </Element>

            <Divider />

            <Element name="portfolio">
                <Portfolio />
            </Element>

        </>
    );
}
export default LandingPage;