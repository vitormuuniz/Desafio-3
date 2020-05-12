import React from 'react';

import Paper from '@material-ui/core/Paper';
import {
    makeStyles,
} from '@material-ui/core/styles';

import DashboardIcon from '@material-ui/icons/Dashboard';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';




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
        height: "51px",
        display: "flex",
        alignItems: 'center',
    },
    dashIcon: {
        fontSize: "30px",
        marginLeft: "58px",
    },


    button: {
        display: "flex",
        marginLeft: "5px",
        padding: "15px",
    },

    a: {
        fontSize: "12px",
        marginLeft: "3px",
        fontStyle: "bold",
        font: "Roboto",
    }


}))


export default function SubHeader(){

    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
    }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
        }
    }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);




    return(
       <div > 
        <Paper className={classes.paper} elevation={4}>
       
            <DashboardIcon className={classes.dashIcon} >

            </DashboardIcon>

            <div className={classes.container}>
        <Button
          className={classes.button}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
            <SettingsIcon color="gray"/>
            <a className={classes.a}>Toggle Menu Grow</a>
            <ArrowDropDownIcon marginLeft="3px"/>
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Empresas</MenuItem>
                    <MenuItem onClick={handleClose}>Usuários</MenuItem>
                    <MenuItem onClick={handleClose}>Teste1</MenuItem>
                    <MenuItem onClick={handleClose}>Teste2</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>        
        </div>
        
        </Paper>
        </div>
    );
}