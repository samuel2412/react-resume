import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/';
import GitHub from '@material-ui/icons/GitHub';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';

import PortfolioCard from './PortfolioCard/PortfolioCard';



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
    },
    git: {
        display: 'flex',
        flex: 1,
    },
    a: {
        margin: 'auto',
    },
    icon: {
        color: '#000',
        width: theme.spacing(10),
        height: theme.spacing(3),
    }
}));

const Portfolio = props => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        axios.get('https://react-resume-samuel.firebaseio.com/projetos.json')
            .then(res => {
                //console.log(res.data);
                const aux = [];
                for (let key in res.data) {
                    const desc = [];
                    for (let innerKey in res.data[key].descricao) {
                        desc.push(res.data[key].descricao[innerKey])
                    }
                    aux.push(
                        {
                            ...res.data[key],
                            descricao: desc
                        })
                }

                setProjetos(aux)
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }, []);

    let portfolio;
    if (!isLoading) {

        portfolio = (
            <>
                {projetos.map(projeto => (

                    <PortfolioCard key={projeto.url} title={projeto.titulo} url={projeto.url}
                        src={projeto.preview} date={projeto.data}>

                        {projeto.descricao.map(paragrafo => (
                            <Typography key={paragrafo} variant="body1" component='p' gutterBottom
                                dangerouslySetInnerHTML={{ __html: paragrafo }}
                            />
                        ))}

                        <a className={classes.git} href={projeto.github}>
                            <Button className={classes.git} variant='outlined'>
                                <GitHub className={classes.icon} />
                            </Button>
                        </a>
                    </PortfolioCard>
                ))}
            </>
        );
    }

    return (
        <div className={classes.root}>
            <div className={classes.content}>

                <Typography className={classes.title} variant='subtitle1' gutterBottom>
                    Portifólio
                </Typography>
            </div>
            <div className={classes.content}>
                <div className={classes.text}>
                    {isLoading ? <LinearProgress style={{width:'80vw'}}/> : null}

                    {portfolio}

                </div>
            </div>
        </div >
    );
}
export default Portfolio;