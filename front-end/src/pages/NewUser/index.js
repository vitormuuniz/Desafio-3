import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import { Grid, Typography, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import api from '../../services/api';

import hstLogo from '../../assets/logoHST.png';


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
        height: "15%",
    },
}))



export default function NewUser() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [company_id, setCompany_id] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [companies, setCompanies] = useState([]);

    

    console.log(companies);
    companies.sort(function (string1, string2) {
        return (string1.name > string2.name) - (string1.name < string2.name)
    });

    const classes = useStyles();

    const [values, setValues] = useState({
        showPassword: false
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    async function handleNewUser(e) {
        e.preventDefault();
        
        
        const data = ({
            company_id,
            email,
            name,
            password,
        })
        
        try {
            if (password === confirmPassword) {
                    const response = await api.post('users', data);
                    setname('');
                    setemail('');
                    setPassword('');
                    setConfirmPassword('');
                    alert(`Usuário cadastrado com sucesso`);
                }
            else {
                alert('Senhas não correspondentes!');
            }
        } catch (err) {
            alert(`Erro ao cadastrar usuário`);
        }

    }

    return (

        <div className="newRegister-container">
            <Paper className={classes.paper} elevation={4}>
                <Grid container direction="column">
                    <Grid container className={classes.grid}>
                        <Grid item className={classes.gridItem} xs>
                            <img src={hstLogo} alt="HST - Card Technology" />
                        </Grid>

                        <Grid item className={classes.gridItem} xs >

                            <form onSubmit={handleNewUser} className={classes.root} autoComplete="off">
                                <TextField
                                    className={classes.margin}
                                    id="name"
                                    required
                                    value={name}
                                    onChange={e => setname(e.target.value)}
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
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={e => setemail(e.target.value)}
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
                                    required
                                    value={company_id}
                                    onChange={e => setCompany_id(e.target.value)}
                                    select
                                    label="Empresa"
                                    helperText="Selecione sua empresa"
                                >
                                    {companies.map(company => (<MenuItem value={company.id}>{company.name}</MenuItem>))}


                                </TextField>

                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="passwordInput">Senha</InputLabel>
                                    <Input
                                        id="passwordInput"
                                        type={values.showPassword ? 'text' : 'password'}
                                        required
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
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

                                    <TextField
                                        id="standard-basic"
                                        label="Confirmar Senha"
                                        required
                                        type={values.showConfirmPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        error={confirmPassword !== password}
                                        helperText={confirmPassword !== password ? 'Senhas não correspondentes' : ' '}
                                    />
                                </FormControl>
                                <Button variant="contained" size="medium" color="primary" type="submit" className={classes.margin}>
                                    <Typography>Cadastrar</Typography>
                                </Button>
                            </form>


                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div >


    );
}