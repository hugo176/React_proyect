import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Button, BottomNavigationAction, Typography} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
/*personalizar los colores*/
import {ThemeProvider} from "@material-ui/core/styles"
import theme from "../../themeConfig"
import Formulario from "./Formulario"
import { useState } from "react"
import Galeria from "./Galeria"

//rfce [] {} # {/**/}
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Nasa() {

    const classes = useStyles();
    
    const [fecha, setFecha] = useState()

    return(
        <ThemeProvider theme={theme}>

          {/*Contenedor de la pagina principal*/}  
          <Grid>
            
            {/*Titulo de la pagina principal*/}
            <Typography 
              variant="h1" 
              color="initial"
              align="center">
              Nasa
            </Typography>

            {/*Boton buscar*/}
            <Formulario getFecha = {(date) => setFecha(date)}/> 
            <Galeria fecha={fecha}/>
            {/*console.log(fecha)*/}
          </Grid>
        </ThemeProvider>
    )
}

export default Nasa
