import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Link from '@material-ui/core/Link';

import Contact from '../../Contact/Contact';
import Button from '../../UI/Button/Button';


/* const Copyright = () => {
    return (
        
    );
} */

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: grey[800],
    },
    footer: {
        backgroundColor: grey[900],
        padding: theme.spacing(6),
    },
}));

const Footer = props => {
    const classes = useStyles();

    const scrollToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={classes.root}>
            <Button
                onClick={() => scrollToTop()}
                border={'none'}
                borderRadius={'25px'}
                height={'50px'}
                width={'50px'}
                firstColor={grey[700]}
                secondColor={blueGrey[500]}
                marginBottom={'-25px'}
                marginLeft={'auto'}
                marginRight={'auto'}
                zIndex={'5'}
            >
                <ExpandLessIcon />
            </Button >
            <div className={classes.footer}>

                <Contact width='50%' />
                <br />
                <Typography style={{color:'#fff'}} variant="subtitle1" align="center" component="p">
                    Este site foi desenvolvido em ReactJS
                 </Typography>
                <div>
                </div>
            </div>
        </div>
    );

}
export default Footer;