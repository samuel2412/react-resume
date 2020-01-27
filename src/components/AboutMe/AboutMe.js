import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import grey from '@material-ui/core/colors/grey';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        padding: theme.spacing(3),
        backgroundColor: grey[800],
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
    },
    avatar: {
        width: theme.spacing(13),
        height: theme.spacing(13),
        [theme.breakpoints.down('800')]: {
            display: 'none',
        },
    },
    text: {
        color: '#fff',
        padding: theme.spacing(3),
        textAlign: "justify",
    },
    about: {
        fontWeight: 'bold',
        letterSpacing: '-1px'

    },
}));

const AboutMe = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Avatar alt="Samuel Alves de Almeida"
                    src='https://firebasestorage.googleapis.com/v0/b/react-resume-samuel.appspot.com/o/profile.png?alt=media&token=00eb5548-cad0-4b0a-ae6d-aeaa4d8643dd'
                    className={classes.avatar} />
            </div>
            <div className={classes.content}>
                <div className={classes.text}>
                    <Typography className={classes.about} variant='h4' gutterBottom>
                        Sobre mim
                    </Typography>

                    <Typography variant="body1" component='p' gutterBottom>
                        Cientista da Computação, com 2 anos de experiência em back-end com Java
                        construindo e mantendo desde aplicações para desktop à aplicações RESTful
                        e clientes JSP para gestão empresarial.
                    </Typography>
                    <Typography variant="body1" component='p' gutterBottom>
                        A partir da experiência com JSP surgiu o interesse em se aprofundar no desenvolvimento
                        front-end com tecnologias mais modernas, optando por ReactJS que possibilita o desenvolvimento
                        mobile com React Native e também a praticidade de se usar apenas JavaScript que abre caminho
                        para o uso de Node.js no back-end.
                    </Typography>


                    <Typography className={classes.about} variant='h5' gutterBottom>
                        Contato
                    </Typography>

                    <Typography variant="body2" component='p' gutterBottom>
                        samuel241296@hotmail.com
                    </Typography>

                </div>
            </div>
        </div>
    );
}
export default AboutMe;