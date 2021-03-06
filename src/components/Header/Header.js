import React from 'react'
import { makeStyles } from '@mui/styles';
import {AppBar ,Toolbar,Button,Container, CardMedia, Typography, Grid,} from "@mui/material"
import { Link } from 'react-router-dom';
import CategoriesComponent from './Categories/Categories';

const useStyles = makeStyles({
   
    categories :{

        width :"100%",
    }
  
})

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.categories}>
            <AppBar position="static">
                <Toolbar style={{background : "white"}} >
                      <Link to={"/"} style={{textDecoration: "none"}}>
                          <h2 style={{color : "red"}}>airbnb</h2>
                          </Link>
                </Toolbar>
            </AppBar> 
            <br />
            <CategoriesComponent /> 
        </div>
    )
}

export default Header
