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

const Work = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography className={classes.title} variant='subtitle1' gutterBottom>
                    Profissional
                    </Typography>
            </div>
            <div className={classes.content}>
                <div className={classes.text}>
                    <Typography className={classes.subtitle} variant="h5" component='h5'>
                        KC TECNOLOGIA, SERVIÇOS IMOBILIÁRIOS E DE INTERNET, EMPREENDIMENTOS E PARTICIPAÇOES LTDA
                        </Typography>
                    <Typography variant="overline" component='p' gutterBottom>
                        Desenvolvedor de front-end júnior •  Mar 2020 - o momento
                        </Typography>
                    <Typography variant="body1" component='p' gutterBottom>
                        Desenvolvimento e manutenção de aplicações web para o setor de Real Estate Tech utilizando VueJS.
                    </Typography>

                    <Divider variant="middle" />

                    <Typography className={classes.subtitle} variant="h5" component='h5'>
                        MARÃO ENTRETERIMENTO, CULTURA E COMÉRCIO VAGERISTA DE REVISTAS, LIVROS, BRINQUEDOS, DVDS E JORNAIS LTDA
                        </Typography>
                    <Typography variant="overline" component='p' gutterBottom>
                        Desenvolvedor java júnior •  Jan 2019 - Dez 2019
                        </Typography>
                    <Typography variant="body1" component='p' gutterBottom>
                        Desenvolvimento e manutenção de sistemas para gestão empresarial utilizando Java, JSP, Spring Framework e bancos de dados Mysql.
                    </Typography>

                    <Divider variant="middle" />

                    <Typography className={classes.subtitle} variant="h5" component='h5'>
                        MARÃO ENTRETERIMENTO, CULTURA E COMÉRCIO VAGERISTA DE REVISTAS, LIVROS, BRINQUEDOS, DVDS E JORNAIS LTDA</Typography>
                    <Typography variant="overline" component='p' gutterBottom>
                        Estagiário em desenvolvimento java •  Fev 2018 - Dez 2018
                        </Typography>
                    <Typography variant="body1" component='p' gutterBottom>
                        Desenvolvimento e manutenção de sistemas para gestão empresarial utilizando Java, JSP e bancos de dados Mysql.
                        </Typography>

                </div>
            </div>
        </div>
    );
}
export default Work;