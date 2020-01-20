import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        padding: theme.spacing(3),
        [theme.breakpoints.down('800')]: {
            flexDirection: 'column',
        },
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        textAlign: "justify",
        fontWeight: 'bold',
        letterSpacing: '-1px',
        width: theme.spacing(10),
        marginLeft: theme.spacing(3),
        borderBottom: '3px solid',
        borderBottomColor: blueGrey[500],
        borderBottomRightRadius: '3px',
    },
    text: {
        padding: theme.spacing(3),
        textAlign: "justify",
    },
    subtitle: {
        marginTop: theme.spacing(1),
        fontWeight: 'bold',
        letterSpacing: '-1px',
    }
}));

const Education = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography className={classes.title} variant='subtitle1' gutterBottom>
                    Educação
                    </Typography>
            </div>
            <div className={classes.content}>
                <div className={classes.text}>
                    <Typography className={classes.subtitle} variant="h5" component='h5'>
                        Universidade São Judas Tadeu
                        </Typography>
                    <Typography variant="overline" component='p' gutterBottom>
                        Bacharelado em Ciência da Computação •  2015 - 2019
                        </Typography>
                    
                    <Divider variant="middle" />

                    <Typography className={classes.subtitle} variant="h5" component='h5'>
                        ETEC Martin Luther King
                        </Typography>
                    <Typography variant="overline" component='p' gutterBottom>
                        Ensino Técnico integrado ao Médio • Técnico em Marketing • 2012 - 2014
                        </Typography>
                </div>
            </div>
        </div>
    );
}
export default Education;