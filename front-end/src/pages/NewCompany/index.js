import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid, MenuItem, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import BusinessIcon from '@material-ui/icons/Business';
import PhoneIcon from '@material-ui/icons/Phone';

import { TextInput } from "./textInput";

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
        height: "5",
    },
}))

export default function NewCompany(){

    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [type_company, setype_company] = useState('');

    const classes = useStyles();

    async function handleNewCompany(e){
        e.preventDefault();
        const code = 1;
 
        console.log({
            name,
            code,
            phone,
            type_company
     })
 
        const data = ({
            name,
            code,
            phone,
            type_company
        })
        try {
         const response = await api.post('companies', data);
         alert(`Empresa cadastrada com sucesso ${response.data}`);
        } catch (err) {
            alert(`Erro ao cadastrar empresa` );
        }
 
     }

    return(

        <div className="newRegister-container">
            <Paper className={classes.paper} elevation={4}>
                <Grid container direction="column">
                    <Grid container className={classes.grid}>
                            <Grid item className={classes.gridItem} xs>
                            <img src={hstLogo} alt="HST - Card Technology"/>
                            </Grid>
                            
                            <Grid item className={classes.gridItem} xs >
                                <form onSubmit={handleNewCompany} className={classes.root} noValidate autoComplete="off">
                                    <TextField
                                        className={classes.margin}
                                        id="name"
                                        required
                                        value={name}
                                        onChange={e => setname(e.target.value)}
                                        label="Empresa"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <BusinessIcon color="primary" />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    <TextField
                                        className={classes.margin}
                                        id="phone"
                                        required
                                        value={phone}
                                        onChange={e => setphone(e.target.value)}
                                        label="Telefone"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PhoneIcon color="primary" />
                                                </InputAdornment>
                                            ),
                                            inputComponent: (TextInput),
                                        }}
                                    />

                                    <TextField
                                        className={classes.margin}
                                        id="standard-select-currency"
                                        required
                                        value={type_company}
                                        onChange={e => setype_company(e.target.value)}
                                        select
                                        label="Tipo Empresa"
                                        helperText="Selecione o Tipo da Empresa"
                                    >
                                        <MenuItem value={'Tipo 1'}>Tipo 1</MenuItem>
                                        <MenuItem value={'Tipo 2'}>Tipo 2</MenuItem>
                                        <MenuItem value={'Tipo 3'}>Tipo 3</MenuItem>
                                    </TextField>
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