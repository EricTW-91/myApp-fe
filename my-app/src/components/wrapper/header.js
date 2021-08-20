import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Breadcrumbs, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const handleClick = () => {

}

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Logo
                </Typography>

                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/login" onClick={handleClick}>
                        Login
                    </Link>
                    <Link color="inherit" href="/register" onClick={handleClick}>
                        Register
                    </Link>
                    {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
                </Breadcrumbs>
            </Toolbar>
        </AppBar>
    );
}
 
export default Header;

