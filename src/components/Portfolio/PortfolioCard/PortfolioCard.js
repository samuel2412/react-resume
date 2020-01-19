import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        borderRadius: '5px',
        marginBottom: theme.spacing(5),
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        padding: theme.spacing(3),
        textAlign: "justify",
    },
    subtitle: {
        fontWeight: 'bold',
        letterSpacing: '-1px',
        textAlign: 'left'
    },
    preview: {
        borderRadius: '4px',
        height: '40%'
    },


}));

const PortfolioCard = props => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <div className={classes.content}>
                <a href={props.url}>
                    <CardMedia
                        className={classes.preview}
                        component="img"
                        alt={props.title}
                        image={props.src}
                        title={props.title}
                    />
                </a>
                <div className={classes.text}>
                    <Typography className={classes.subtitle} variant="h5" component='h5'>
                        {props.title}
                    </Typography>
                    <Typography variant="overline" component='p' gutterBottom>
                        {props.date}
                    </Typography>

                    {props.children}

                </div>
            </div>
        </Paper>
    );
}

export default PortfolioCard;