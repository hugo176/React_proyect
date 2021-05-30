import React from 'react'
import { useState } from "react"
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Button, BottomNavigationAction, Typography, Box} from "@material-ui/core";
import Formulario from "./Formulario";
import Galeria from "./Galeria"
//rfce [] {} # {/**/}

/*MakeStyles: establcer estilos*/
const useStyle  = makeStyles({

    /*Estilos del titulo*/
    tituloStyle: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: "0px",
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: "white",
        height: 60,
        paddingLeft: "40"
    },
})

function Pokemones() {

    const classes = useStyle()

    return (
        <Grid container style={{ height: "100%"}}>
            <Grid xs={6}  justify="center" alignItems="center" style={{ padding: 20 , textAlign: "center", margin: "0 auto"}}>
                <Box border={3} borderColor="rgba(255, 105, 135, .3)" xs={12}>
                    {/*Titulo*/}
                    <Box className={classes.tituloStyle} >
                        <Typography 
                            variant="h3" 
                            color="initial"
                            align="center"
                            >
                                Pokemon
                        </Typography>
                    </Box>
                    {/*Formulario*/}
                    <Box  style={{ padding: 10 , textAlign: "center", margin: "0 auto"}}>
                         {/*Formulario, buscar un pokemon*/}
                         <Formulario />
                    </Box>
                </Box>

                {/*Galeria*/}
                <Box style={{ padding: 0 , textAlign: "center", margin: "40px auto"}}>
                    <Galeria />
                </Box>      
            </Grid>
        </Grid>
    )
}

export default Pokemones
