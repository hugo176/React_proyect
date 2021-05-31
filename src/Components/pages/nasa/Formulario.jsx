import { Box, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useState } from "react"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {Button, BottomNavigationAction, Typography} from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import axios from "axios"


const useStyle  = makeStyles({


});

/*Componente formulario*/
function Formulario(props) {

    //estilos
    const classes = useStyle()

    /*texto: el texto se actualiza cada vez que se produce un cambio en el campo*/
    const [selectedDate, setSelectedDate] = React.useState(new Date());

     /*manejador del click sobre el boton buscar
     const handleOnClickButton = () => {
        console.log(selectedDate)
    }
    */

    /*actualiza myTextField con cada cambio producido sorbe el campo*/
    const handleDateChange = (date) => {
        setSelectedDate(date);
        props.getFecha(date)
    };
    
    
    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={4}  style={{ padding: 5 , textAlign: "center", margin: "0 auto"}}>
                    <Box>
                        {/*Formulario, buscar un pokemon*/}
                        <form className={classes.root} noValidate autoComplete="off">

                        {/*Campo de de fecha*/}
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>

                        {/*Boton buscar
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
                        */}

                        </form>

                    </Box>
                </Grid>
        </Grid>
    )
}

export default Formulario
