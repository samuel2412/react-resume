import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

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

    return (
        <>
            <div className={classes.root}>
                
                <SideDrawer/>
                <AppBar position="fixed" className={classes.appbar} >
                    <Toolbar>
                        <div className={classes.buttonGroup}>
                            <Button color="inherit">Default</Button>
                            <Button color="inherit">Default</Button>
                            <Button color="inherit">Default</Button>
                            <Button color="inherit">Login</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}
export default Navbar;