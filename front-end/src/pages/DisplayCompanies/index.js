import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import MUIDataTable from "mui-datatables";

import api from '../../services/api';

const columns = [
    {
     name: "name",
     label: "Empresa",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "phone",
     label: "Telefone",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "type_company",
     label: "Tipo",
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
          noMatch: "Empresa não encontrada",
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
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        api.get('companies').then(response => { setCompanies(response.data) })
    }, []);
    
    return (
        <div className="newRegister-container">
            <Paper className={classes.paper} elevation={0}>
                <MUIDataTable
                    title={"Lista de Empresas"}
                    data={companies}
                    columns={columns}
                    options={options}
                />
          </Paper>
        </div >
    );
}
