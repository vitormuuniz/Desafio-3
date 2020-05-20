import React from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import {
    makeStyles,
} from '@material-ui/core/styles';

import '../../global.css';
import "./styles.css";
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    buttonIcon: {
        padding: "none",
    },

    homeicon: {
        fontSize: "30px",
        color: "#FFF",
    },


}))




export default function Header() {

    const classes = useStyles();

    return (
        <header id="main-header">
            <div class="headerClass">
                <Button className={classes.buttonIcon} component={Link} to="/" >
                   <HomeIcon className={classes.homeicon} /> 
                </Button>
                <h1 className="commons">Commons</h1>
            </div>
        </header>
    );
}