import React from 'react';

import Paper from '@material-ui/core/Paper';
import {
    makeStyles,
} from '@material-ui/core/styles';

import DashboardIcon from '@material-ui/icons/Dashboard';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


import '../../global.css';
import "./styles.css";


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },

    root: {
        '& > *': {

            width: '100%',
        },
    },
    paper: {
        width: "100%",
        height: "100%",
        height: "50px",
        display: "flex",
        alignItems: 'center',
    },
    dashIcon: {
        fontSize: "30px",
        marginLeft: "45px",
    },
}))






export default function SubHeader(){
    const classes = useStyles();

    return(
       <div > 
        <Paper className={classes.paper} elevation={4}>
            <DashboardIcon className={classes.dashIcon} >

            </DashboardIcon>

            <div className="container">
                    <PopupState variant="popover" popId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                                <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                                    Open Menu
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}>Cake</MenuItem>
                                    <MenuItem onClick={popupState.close}>Death</MenuItem>
                                </Menu>
                        </React.Fragment>
                        )}
                    </PopupState>
                </div>
                
        </Paper>
        </div>
    );
}