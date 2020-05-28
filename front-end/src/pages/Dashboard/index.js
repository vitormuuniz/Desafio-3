import React from 'react';
import {
    makeStyles,
} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';
import '../../global.css';
import './styles.css';


const useStyles = makeStyles((theme) => ({


    margin: {
        margin: theme.spacing(1),
    },

    root: {
        paddingTop: "50px",
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(30),
            height: theme.spacing(20),
        },
    },

    paper: {
        borderRadius: "4px",
        display: "space-around",
        textDecoration: "inherit",
        '&:hover': {
            background: "#f3f0f0",
            textDecoration: "inherit",
         },
    },

    containerPaper: {
        display: "inline-flex",
        paddingLeft: "0px",
        paddingRight: "10px",
        marginTop: "15px",
        marginLeft: "20px",
        marginRight: "20px",
        alignItems: "center",
        height: "50px",
        width: "80%",

    },

    iconSettings: {
        fontSize: "25px",
    },

    configPaper: {

        marginLeft: "15px",
        font: "Roboto",
        fontWeight: "bold",
        fontSize: "18px",
        color: "#504F4F",
    },

    containerPaper2: {
        display: "flex",
        marginTop: "10px",
    },

    configPaper2: {
        fontSize: "16px",
        fontWeight: "normal",
        paddingLeft: "25px",
        letterSpacing: "0.06em",
        color: "#4f4f4f",
    },


}));



export default function Dashboard() {

    const classes = useStyles();

    return (

        <div class="content">
            <div class="box">
                <a class="box-welcome">
                    Bem vindo!
            </a>
            </div>

            <div class="new-dashboard-container">
                <div className={classes.root}>

                    <Paper elevation={4} className={classes.paper} component={Link} to="/newcompany" >

                        <div className={classes.containerPaper}>
                            <SettingsIcon className={classes.iconSettings} color="primary" />
                            <a className={classes.configPaper} id="config">Configurações</a>
                        </div>

                        <div className={classes.containerPaper2} >
                            <Typography className={classes.configPaper2} >Cadastrar Empresas</Typography>
                        </div>
                    </Paper>

                    <Paper elevation={4} className={classes.paper} component={Link} to="/newuser">
                        <div className={classes.containerPaper}>
                            <SettingsIcon className={classes.iconSettings} color="primary" />
                            <a className={classes.configPaper} id="config">Configurações</a>
                        </div>

                        <div className={classes.containerPaper2} >
                            <Typography className={classes.configPaper2} >Cadastrar Usuários</Typography>
                        </div>
                    </Paper>

                    <Paper elevation={4} className={classes.paper} component={Link} to="/users">
                        <div className={classes.containerPaper}>
                            <SettingsIcon className={classes.iconSettings} color="primary" />
                            <a className={classes.configPaper} id="config">Configurações</a>
                        </div>

                        <div className={classes.containerPaper2} >
                            <Typography className={classes.configPaper2} >Lista de Usuários</Typography>
                        </div>
                    </Paper>

                    <Paper elevation={4} className={classes.paper} component={Link} to="/companies">
                        <div className={classes.containerPaper}>
                            <SettingsIcon className={classes.iconSettings} color="primary" />
                            <Typography className={classes.configPaper} id="config" >Configurações</Typography>
                        </div>

                        <div className={classes.containerPaper2} >
                            <Typography className={classes.configPaper2}>Lista de Empresa</Typography>
                        </div>
                    </Paper>

                </div>
            </div>
        </div>
    );
}