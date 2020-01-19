import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import * as Scroll from 'react-scroll';

import SideDrawer from './SideDrawer/SideDrawer';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: grey[800],
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    buttonGroup: {
        margin: 'auto',
    },
}));

const Navbar = props => {
    const classes = useStyles();
    const Link = Scroll.Link;

    return (
        <>
            <div className={classes.root}>

                <SideDrawer />
                <AppBar position="fixed" className={classes.appbar} >
                    <Toolbar>
                        <div className={classes.buttonGroup}>
                            <Link to="home" smooth={true} duration={500} offset={-100}>
                                <Button color="inherit">Home</Button>
                            </Link>
                            <Link to="about" smooth={true} duration={500} offset={-100}>
                                <Button color="inherit">Sobre</Button>
                            </Link>
                            <Link to="work" smooth={true} duration={500} offset={-100}>
                                <Button color="inherit">Profissional</Button>
                            </Link>
                            <Link to="education"smooth={true} duration={500} offset={-100}>
                                <Button color="inherit">Educação</Button>
                            </Link>
                            <Link to="skill" smooth={true} duration={500} offset={-100}>
                                <Button color="inherit">Habilidades</Button>
                            </Link>
                            <Link to="portfolio" smooth={true} duration={500} offset={-100}>
                                <Button color="inherit">Portifólio</Button>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}
export default Navbar;