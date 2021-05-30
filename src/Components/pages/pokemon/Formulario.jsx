import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { useState } from "react"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Button, BottomNavigationAction, Typography} from "@material-ui/core";


const useStyle  = makeStyles({

    /*Estilos del boton buscar*/
    botonBuscarStyle: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: "white",
        height: 48,
        padding: "0 30px"
    },

});

/*Componente formulario*/
function Formulario() {

    //estilos
    const classes = useStyle()

    /*texto: el texto se actualiza cada vez que se produce un cambio en el campo*/
    const [myTextField, setMyTextField] = useState("")

     /*manejador del click sobre el boton buscar*/
     const handleOnClickButton = () => {
        console.log(myTextField)
    }

    /*actualiza myTextField con cada cambio producido sorbe el campo*/
    const handleOnChangeField = (text) => {
        setMyTextField(text)
    }

    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={4}  style={{ padding: 5 , textAlign: "center", margin: "0 auto"}}>
                    <Box>
            
                        {/*Formulario, buscar un pokemon*/}
                        <form className={classes.root}noValidate autoComplete="off">

                            {/*Campo de texto*/}
                            <TextField id="standard-basic" label="Nombre" onChange={ (e) => handleOnChangeField(e.target.value)}/>

                            {/*Boton buscar*/}
                            <Button 
                                className={classes.botonBuscarStyle}
                                variant="contained" 
                                color="primary"
                                href=""
                                endIcon={<SearchOutlinedIcon />}
                                onClick={handleOnClickButton}
                                style={{ padding: 20 , textAlign: "center", margin: "20px auto"}}>
                                    Buscar
                            </Button>

                        </form>

                    </Box>
                </Grid>
        </Grid>
    )
}

export default Formulario
