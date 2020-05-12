import React from 'react';

import Paper from '@material-ui/core/Paper';
import {
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import hstLogo from '../../assets/logoHST.png';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { Grid, Typography } from '@material-ui/core';

import Button from '@material-ui/core/Button';

import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import './styles.css';



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



export default function NewUser() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        confirmPassword: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        showConfirmPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (

        <div className="newRegister-container">
            <Paper className={classes.paper} elevation={4}>
                <Grid container direction="column">
                    <Grid container className={classes.grid}>
                        <Grid item className={classes.gridItem} xs>
                            <img src={hstLogo} alt="HST - Card Technology" />
                        </Grid>

                        <Grid item className={classes.gridItem} xs >

                            <form action="" className={classes.root} noValidate autoComplete="off">
                                <TextField
                                    className={classes.margin}
                                    id="userName"
                                    label="Usuário"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle color="primary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />


                                <TextField
                                    className={classes.margin}
                                    id="userEmail"
                                    label="Email"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon color="primary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <TextField
                                    className={classes.margin}
                                    id="standard-select-currency"
                                    select
                                    label="Empresa"
                                    helperText="Selecione sua empresa"
                                >
                                </TextField>

                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="passwordInput">Senha</InputLabel>
                                    <Input
                                        id="passwordInput"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    color="primary"
                                                >
                                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>


                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="confirmPasswordInput">Confirmar Senha</InputLabel>
                                    <Input
                                        id="confirmPasswordInput"
                                        type={values.showConfirmPassword ? 'text' : 'password'}
                                        value={values.confirmPassword}
                                        onChange={handleChange('confirmPassword')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowConfirmPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    color="primary"
                                                >
                                                    {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                        <Button variant="contained" size ="medium" color="primary" className={classes.margin}>
                                            Cadastrar
                                        </Button>
                            </form>


                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div >


    );
}