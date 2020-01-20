import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Contact from '../Contact/Contact';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/react-resume-samuel.appspot.com/o/background.jpg?alt=media&token=31c31e08-b4f7-409c-b3b3-20f75e9e6bc1")',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: 'top',
        backgroundSize: 'cover',
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',

    },
 
    headline: {
        textAlign: 'center',
        color: theme.palette.primary.contrastText,
        letterSpacing: '-1px',
        fontWeight: 'bold',
        WebkitTextStrokeWidth: '1px',
        WebkitTextStrokeColor: '#000',
    }
}));

const Header = props => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.root}
            alt={'Photo by Mazhar Zandsalimi on Unsplash'}
        >
            <div>

                <Typography className={classes.headline} variant="h2" gutterBottom>
                    Samuel Alves de Almeida
                </Typography>
                <Divider variant="middle" style={{ backgroundColor: '#fff' }} />

                <Contact width='100%'/>

            </div>

        </Grid>
    );
}
export default Header;