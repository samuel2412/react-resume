import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

import Button from '../../../UI/Button/Button';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            backgroundColor: 'transparent',
            padding: theme.spacing(2),
        },
    },
    list: {
        minWidth: '180px',
        width: '40vw',
    },
    icon: {
        color: "inherit",
        backgroundColor: blueGrey[500],
    },
}));

const SideDrawer = props => {
    const classes = useStyles();
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>

                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}

            </List>
        </div>
    );
    return (
        <div className={classes.root}>
            <Button
             border={'none'}
             borderRadius= {'4px'}
             height= {'40px'}
             width= {'40px'}
             firstColor= {grey[800]}
             secondColor= {blueGrey[500]}
             zIndex= {'5'}
            >
                <MenuIcon />
            </Button >
            <Drawer open={state} onClose={toggleDrawer(false)}>
                {sideList()}
            </Drawer>
        </div>
    );
}

export default SideDrawer;