import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';

import Bar from './Bar/Bar';


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
    text: {
        padding: theme.spacing(3),
        textAlign: "justify",
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
    skill: {
        width: '100%',
        paddingLeft: theme.spacing(2),
        fontSize: '15px',
        fontWeight: 'bold',
        color: '#fff',
        verticalAlign: 'bottom'
    },
}));

const Skills = props => {
    const classes = useStyles();
    const skills =
        [
            {
                key: 'reactjs',
                value: '60%'
            },
            {
                key: 'javascript',
                value: '60%'
            },
            {
                key: 'css',
                value: '60%'
            },
            {
                key: 'java',
                value: '70%'
            },
            {
                key: 'spring framework',
                value: '50%'
            },
            {
                key: 'mysql',
                value: '70%'
            },
            {
                key: 'mongodb',
                value: '30%'
            }

        ]

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <Typography className={classes.title} variant='subtitle1' gutterBottom>
                    Habilidades
                    </Typography>
            </div>
            <div className={classes.content} style={{flex: 1}}>
                <div className={classes.text}>


                    {skills.map(skill => (
                        <React.Fragment key={skill.key}>
                            <Bar
                                height='auto'
                                backColor={grey[500]}
                                frontColor={grey[800]}
                                thirdColor={blueGrey[500]}
                                progress={skill.value}
                            >
                                <Typography className={classes.skill} variant="overline" component='p'>
                                    {skill.key}
                                </Typography>
                            </Bar>
                        </React.Fragment>
                    ))}

                </div>
            </div>
        </div>
    );
}
export default Skills;