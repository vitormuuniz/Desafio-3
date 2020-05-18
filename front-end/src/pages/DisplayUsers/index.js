import React, { useState } from "react";
import {Link} from "react-router-dom";

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


import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';

const columns = [
    { id: "name", label: "Name", maxWidth: 170 },
    { id: "code", label: "ISO\u00a0Code", maxWidth: 100 },
    {
        id: "population",
        label: "Population",
        maxWidth: 170,
        align: "right",
        format: value => value.toLocaleString("en-US")
    },
    {
        id: "size",
        label: "Size\u00a0(km\u00b2)",
        maxWidth: 170,
        align: "right",
        format: value => value.toLocaleString("en-US")
    },
    {
        id: "density",
        label: "Density",
        maxWidth: 170,
        align: "right",
        format: value => value.toFixed(2)
    }
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData("India", "IN", 1324171354, 3287263),
    createData("China", "CN", 1403500365, 9596961),
    createData("Italy", "IT", 60483973, 301340),
    createData("United States", "US", 327167434, 9833520),
    createData("Canada", "CA", 37602103, 9984670),
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
        height: "70%",
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
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [search, setSearch] = useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSearch = () => {
        alert('eae caraio kkkkk');
    }
    return (
        <div className="newRegister-container">
            <Paper className={classes.paper} elevation={4}>
                <Grid container direction="column">
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <form >
                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="searchInput">Buscar Usuário ou empresa</InputLabel>
                                    <Input
                                        id="searchInput"
                                        value={search}
                                        onChange={e => setSearch(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleSearch}
                                                    color="primary"
                                                >
                                                    <Search />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </form>
                        </Grid>

                        <Grid item>
                            <Link to="/newuser">
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<AddIcon />}
                                    className={classes.margin}
                                >
                                    Adicionar Usuário
                            </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <TableContainer >
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map(column => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map(row => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map(column => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === "number"
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
}
