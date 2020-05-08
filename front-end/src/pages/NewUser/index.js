import React from 'react';

import Paper from '@material-ui/core/Paper';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './styles.css';

import hstLogo from '../../assets/logoHST.png';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { MdVisibility } from "react-icons/md"
import { Typography, Grid } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },

    root: {
        '& > *': {

            width: '80%',
        },
    },
    paper: {
        width: "80%",
        height: "70%",
        display: "flex",
        alignItems: 'center',
    },


    grid: {
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",

    },

    gridItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "20",
        height: "80%",
        width: "15%",
        padding: "4",

    },
    hstImg: {
        height: "5",
    },
}))

const companies = [
    {
        label: 'Empresa 1',
    },
    {
        label: 'Empresa 2',
    },
    {
        label: 'Empresa 3',
    }
]


export default function NewUser() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (

        <div className="newRegister-container">
            <Paper className={classes.paper} elevation={4}>
                <Grid container className={classes.grid}>
                    <Grid item className={classes.gridItem} xs>
                        <img src={hstLogo} alt="HST - Card Technology" />
                    </Grid>

                    <Grid item className={classes.gridItem} xs >

                        <form action="" className={classes.root} noValidate autoComplete="off">
                            <TextField
                                className={classes.margin}
                                id="input-with-icon-textfield"
                                label="Usuário"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField
                                className={classes.margin}
                                id="standard-select-currency"
                                select
                                label="Empresa"
                                value={companies}
                                helperText="Selecione sua empresa"
                            >
                            </TextField>

                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>


                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="standard-adornment-password">Confirmar Senha</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>



                        </form>


                    </Grid>
                </Grid>
            </Paper>
        </div >


    );
}