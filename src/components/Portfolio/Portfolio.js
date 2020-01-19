import React from 'react';

import Typography from '@material-ui/core/Typography';
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



    //https://shielded-spire-68979.herokuapp.com/index.jsp
    //https://frozen-ridge-71151.herokuapp.com/
    //http://fierce-island-38673.herokuapp.com/
    //https://pokedex-react-samuel2412.netlify.com/
    //https://react-myburger-c854a.firebaseapp.com/
    //https://react-gamedb.firebaseapp.com/
    return (
        <div className={classes.root}>
            <div className={classes.content}>

                <Typography className={classes.title} variant='subtitle1' gutterBottom>
                    Portifólio
                    </Typography>
            </div>
            <div className={classes.content}>
                <div className={classes.text}>


                    <PortfolioCard title='GameDB' src='/gamedb.jpg' date='jan de 2020'>
                        <Typography variant="body1" component='p' gutterBottom>
                            Game DataBase, permite ao usuário pesquisar por jogos,
                            ver seus detalhes e marca-los como favorito ou concluído.
                            Também é possível visualizar a lista gerada pelo usuário em sua pagina de perfil.
                        </Typography>
                        <Typography variant="body1" component='p' gutterBottom>
                            Os dados dos jogos são consumidos através de
                            requisições HTTP a API <a href='https://rawg.io/apidocs'>rawg.</a>
                        </Typography>
                        <Typography variant="body1" component='p' gutterBottom>
                            Aplicação desenvolvida com ReactJS e Material-UI utilizando bibliotecas como Redux, React-Redux, Axios e armazenando os dados no Firebase.
                        </Typography>
                        <a className={classes.git} href='https://github.com/samuel2412/react-gamedb'>
                            <Button className={classes.git} variant='outlined'>
                                <GitHub className={classes.icon} />
                            </Button>
                        </a>
                    </PortfolioCard>

                    <PortfolioCard title='Burger Builder' src='/burgerBuilder.jpg' date='dez de 2019 – jan de 2020'>
                        <Typography variant="body1" component='p' gutterBottom>
                            Aplicação que permite ao usuário selecionar os ingredientes que ele deseja em seu hambúrguer e realizar o pedido.
                        </Typography>
                        <Typography variant="body1" component='p' gutterBottom>
                            Desenvolvida com ReactJS utilizando bibliotecas como Redux, React-Redux, Axios e armazenando os dados no Firebase.
                        </Typography>
                        <a className={classes.git} href='https://github.com/samuel2412/react-burger-app'>
                            <Button className={classes.git} variant='outlined'>
                                <GitHub className={classes.icon} />
                            </Button>
                        </a>
                    </PortfolioCard>

                    <PortfolioCard title='Pokedex' src='/pokedex.jpg' date='set de 2019 – dez de 2019'>
                        <Typography variant="body1" component='p' gutterBottom>
                            Aplicação desenvolvida com ReactJS que exibe uma lista de pokemons, permitindo ao usuário
                            pesquisar e visualizar os detalhes do pokemon desejado.
                            </Typography>
                        <Typography variant="body1" component='p' gutterBottom>
                            Os dados dos pokemons são consumidos através de
                            requisições HTTP a API <a href='https://pokeapi.co/'>pokeapi.</a>
                        </Typography>
                        <a className={classes.git} href='https://github.com/samuel2412/pokedex-react'>
                            <Button className={classes.git} variant='outlined'>
                                <GitHub className={classes.icon} />
                            </Button>
                        </a>
                    </PortfolioCard>


                    <PortfolioCard title='Site de e-commerce' src='/ecommerce.jpg' date='set de 2019'>
                        <Typography variant="body1" component='p' gutterBottom>
                            Projeto construído usando SpringMVC, Hibernate, Java, JPA, JSP, Bootstrap, etc.
                            </Typography>
                        <Typography variant="body1" component='p' gutterBottom>
                            Trata-se de uma aplicação que simula um e-commerce.
                        </Typography>
                        <a className={classes.git} href='https://github.com/samuel2412/ecommerce'>
                            <Button className={classes.git} variant='outlined'>
                                <GitHub className={classes.icon} />
                            </Button>
                        </a>
                    </PortfolioCard>


                    <PortfolioCard title='Financiamento de Experimentos' src='/experimento.jpg' date='set de 2019'>
                        <Typography variant="body1" component='p' gutterBottom>
                            Projeto construído usando SpringMVC, Hibernate, Java, JPA, JSP, Bootstrap, etc.
                            </Typography>
                        <Typography variant="body1" component='p' gutterBottom>
                            Trata-se de uma aplicação que permite cadastros de Experimentos e que o usuário financie aqueles que o interesse.
                        </Typography>
                        <a className={classes.git} href='https://github.com/samuel2412/experimento'>
                            <Button className={classes.git} variant='outlined'>
                                <GitHub className={classes.icon} />
                            </Button>
                        </a>
                    </PortfolioCard>


                </div>
            </div>
        </div >
    );
}
export default Portfolio;