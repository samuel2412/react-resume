import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Header from '../../components/Header/Header';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
    },
}));

const LandingPage = props => {
    const classes = useStyles();

    return(
       <Header />
    );
}
export default LandingPage;