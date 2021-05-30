import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Button, BottomNavigationAction, Typography} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
/*personalizar los colores*/
import {ThemeProvider} from "@material-ui/core/styles"
import theme from "../../themeConfig"

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
            <Button 
              variant="contained" 
              color="primary"
              href="https://google.com"
              endIcon={<SearchOutlinedIcon />}>
              Buscar
            </Button>
          </Grid>
        </ThemeProvider>
    )
}

export default Nasa
