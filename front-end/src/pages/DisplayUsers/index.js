import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from '@material-ui/core';

import Grid from "@material-ui/core/Grid";

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { IconButton, InputAdornment, FormControl } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import clsx from 'clsx';

import MUIDataTable from "mui-datatables";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';

import api from '../../services/api';

const columns = [
    {
     name: "name",
     label: "Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "email",
     label: "Email",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "company",
     label: "Company",
     options: {
      filter: true,
      sort: false,
     }
    },
    {   
        name: "company_type",
        label: "Tipo de Empresa",
        options: {
         filter: true,
         sort: false,
        }
       },
    
   ];

function createData(name, email, company) {
    return { name, email, company };
}

const rows = [
    createData("Vinicius", "vinicius@teste.com", "HST"),
    createData("Marcos", "marcos@teste.com", "HST"),
    createData("Vitor", "vitor@teste.com", "HST"),
    createData("Murilo", "Murilo@teste.com", "HST"),
    createData("Isabela", "Isabela@teste.com", "HST"),

];

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
        minHeight: "70%",
        alignItems: 'center',
        margin: "auto",
    },
    button: {
        position: "relative",
        bottom: "0",
    }


}));

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('users').then(response => { setUsers(response.data["content"]) })
    }, []);

    console.log(users);
    var usersObj = [];
    users.map(user => {
            var obj={};
            obj["name"]=user.name;
            obj["email"] = user.email;
            obj["company"] = user.company.name;
            obj["company_type"] = user.company.type_company;
            usersObj.push(obj);
    });
    console.log(usersObj);
    return (
        <div className="newRegister-container">
            <Paper className={classes.paper} elevation={0}>
                <MUIDataTable
                    selectableRows = "none"
                    title={"Lista de Usuários"}
                    data={usersObj}
                    columns={columns}
                />
            </Paper>
        </div >
    );
}
