import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import blueGrey from '@material-ui/core/colors/blueGrey';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    iconsGroup: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: theme.spacing(2)
    },
    a: {
        color: 'inherit'
    },
}));

const Contact = props => {
    const classes = useStyles();
    const iconsInitialState = {
        color: '#fff',
        transition: 'color 500ms',
        width: '50px',
        height: '50px'
    }
    const [mailColor, setMailColor] = useState({
        ...iconsInitialState
    });
    const [linkedinColor, setLinkedinColor] = useState({
        ...iconsInitialState
    });
    const [gitColor, setGitColor] = useState({
        ...iconsInitialState
    });

    const changeIconColor = (event, state, setState) => {
        if (event.type === 'mouseenter') {
            setState({
                ...state,
                color: blueGrey[500]
            })
        } else {
            setState({
                ...state,
                color: '#fff',
            })
        }
    }

    return (
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
        alt={'Photo by Mazhar Zandsalimi on Unsplash'}
    >
        <div style={{width: props.width}}>

            <div className={classes.iconsGroup}>
                <a href='mailto:samuel241296@hotmail.com' className={classes.a}>
                    <EmailIcon
                        style={mailColor}
                        onMouseEnter={(event) => changeIconColor(event, mailColor, setMailColor)}
                        onMouseLeave={(event) => changeIconColor(event, mailColor, setMailColor)} />
                </a>

                <a href='https://www.linkedin.com/in/alvessamuel' className={classes.a}>
                    <LinkedInIcon
                        style={linkedinColor}
                        onMouseEnter={(event) => changeIconColor(event, linkedinColor, setLinkedinColor)}
                        onMouseLeave={(event) => changeIconColor(event, linkedinColor, setLinkedinColor)} />
                </a>

                <a href='https://github.com/samuel2412' className={classes.a}>
                    <GitHubIcon
                        style={gitColor}
                        onMouseEnter={(event) => changeIconColor(event, gitColor, setGitColor)}
                        onMouseLeave={(event) => changeIconColor(event, gitColor, setGitColor)} />
                </a>
            </div>

        </div>

    </Grid>
    );
}
export default Contact;