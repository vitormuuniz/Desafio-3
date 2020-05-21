import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import MUIDataTable from "mui-datatables";

import api from '../../services/api';

const columns = [
    {
     name: "name",
     label: "Nome",
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
      sort: true,
     }
    },
    {
     name: "company",
     label: "Company",
     options: {
      filter: true,
      sort: true,
     }
    },
    {   
        name: "company_type",
        label: "Tipo de Empresa",
        options: {
         filter: true,
         sort: true,
        }
       },
    
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
        width: "70%",
        minHeight: "70%",
        alignItems: 'center',
        margin: "auto",
        position:"absolute"
    },
    


}));

const options = {
    selectableRows: 'none',
    rowsPerPage: 5,
    rowsPerPageOptions:[5,10,20],
    filter:false,
    responsive:'scrollMaxHeight',

    textLabels: {
        body: {
          noMatch: "Usuário não encontrado",
          toolTip: "Ordenar",
          columnHeaderTooltip: column => `Ordenar por ${column.label}`
        },
        pagination: {
          next: "Próxima página",
          previous: "Página anterior",
          rowsPerPage: "Linhas por página",
          displayRows: "de",
        },
        toolbar: {
          search: "Pesquisar",
          downloadCsv: "Baixar CSV",
          print: "Imprimir",
          viewColumns: "Ver colunas",
          filterTable: "Filtrar tabela",
        },
        filter: {
          all: "Todos",
          title: "FILTROS",
          reset: "REINICIAR",
        },
        viewColumns: {
          title: "Mostrar Colunas",
          titleAria: "Mostrar/Esconder colunas",
        },
    }
  };

export default function DisplayUsers() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.get('users').then(response => { setUsers(response.data) })
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
                    title={"Lista de Usuários"}
                    data={usersObj}
                    columns={columns}
                    options={options}
                />
          </Paper>
        </div >
    );
}
