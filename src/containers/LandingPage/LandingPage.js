import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider'

import Header from '../../components/Header/Header';
import AboutMe from '../../components/AboutMe/AboutMe';
import Work from '../../components/Work/Work';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import Portifolio from '../../components/Portifolio/Portifolio';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
}));

const LandingPage = props => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <AboutMe />
            <Work />
            <Divider/>
            <Education />
            <Divider/>
            <Skills />
            <Divider/>
            <Portifolio />

        </>
    );
}
export default LandingPage;