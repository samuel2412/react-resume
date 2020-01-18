import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../Navigation/Navbar/Navbar';
import Footer from '../Navigation/Footer/Footer';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Layout = props => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    );
}
export default Layout;