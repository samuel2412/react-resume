import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        padding: theme.spacing(3),
        backgroundColor: grey[800],
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

const Portifolio = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography className={classes.title} variant='subtitle1' gutterBottom>
                    Portifólio
                    </Typography>
            </div>
            <div className={classes.content}>
                <div className={classes.text}>
                    <Typography className={classes.subtitle} variant="h5" component='h5'>
                        Lorem ipsum
                        </Typography>
                    <Typography variant="overline" component='p' gutterBottom>
                        Senior Software Engineer (Team Lead) •  Feb 2017 - Jun 2018
                        </Typography>
                    <Typography variant="body1" component='p' gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in cursus dolor. Vestibulum enim quam, egestas in ex ut, consequat ornare elit. Proin finibus augue id aliquam aliquet. Nunc luctus libero sed dolor dictum, dictum lobortis lorem feugiat. Nulla pretium sagittis accumsan. Morbi pellentesque magna massa. Pellentesque eu ex urna.
                    </Typography>

                    <Divider variant="middle" />

                    <Typography className={classes.subtitle} variant="h5" component='h5'>
                        Lorem ipsum
                        </Typography>
                    <Typography variant="overline" component='p' gutterBottom>
                        Senior Software Engineer (Team Lead) •  Feb 2017 - Jun 2018
                        </Typography>
                    <Typography variant="body1" component='p' gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in cursus dolor. Vestibulum enim quam, egestas in ex ut, consequat ornare elit. Proin finibus augue id aliquam aliquet. Nunc luctus libero sed dolor dictum, dictum lobortis lorem feugiat. Nulla pretium sagittis accumsan. Morbi pellentesque magna massa. Pellentesque eu ex urna.
                    </Typography>

                </div>
            </div>
        </div>
    );
}
export default Portifolio;