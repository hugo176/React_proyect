import React from 'react'
import Grid from '@material-ui/core/Grid';
import {Button, BottomNavigationAction, Typography} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

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

function Home() {

    const classes = useStyles();

    return (
        <div>

          {/*Contenedor de la pagina principal*/}  
          <Grid>
            
            {/*Titulo de la pagina principal*/}
            <Typography 
              variant="h1" 
              color="initial"
              align="center">
              Home  
            </Typography>
      
        </Grid>
        </div>
    )
}

export default Home
