import React from 'react';
import {
    makeStyles,
} from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';



import '../../global.css';
import './styles.css';
import { Grid } from '@material-ui/core';

    const useStyles = makeStyles((theme) => ({

        
        margin: {
            margin: theme.spacing(1),
        },

        root: {
            paddingTop: "50px",
            padding: "10px",
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
              margin: theme.spacing(2),
              width: theme.spacing(20),
              height: theme.spacing(20),
            },
          },

          paper: {
              borderRadius: "4px",
              display: "inline-flex",
          },


    }));


export default function Dashboard(){
    
    const classes = useStyles();

    return (

    <div> 
        <div className="box">  
            <a className="box-welcome">
                Bem vindo!
            </a>    
        </div> 
    <div className="new-dashboard-container">
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}/>
            <Paper elevation={3} className={classes.paper}/>
            <Paper elevation={3} className={classes.paper}/>
            <Paper elevation={3} className={classes.paper}/>
            <Paper elevation={3} className={classes.paper}/>
        </div>    
    </div>
    </div> 

   
  );
}