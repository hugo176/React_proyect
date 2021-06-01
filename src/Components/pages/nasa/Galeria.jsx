import '@fontsource/roboto';
import { styled } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';
import { Box, Grid, Typography, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

//rfce [] {} # {/**/}
 /*Estilos*/
 const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

function Galeria(props) {

    /*variables*/
    let fechaHoy = new Date()
    let hoy = ""

    /*constantes*/
    const [date, setDete] = useState(new Date()) 
    const [urlImg, setUrlImg] = useState()
    const [title, setTitle] = useState()
    const [descripcion, setDescripcion] = useState("")
    const Box = styled('div')(compose(spacing, palette))

    /*consulta a la API*/
    useEffect(() => {

        if(props.fecha == undefined){
            console.log("Fecha indefinido")
            let dia = fechaHoy.getDate()
            let mes = fechaHoy.getMonth() + 1
            let año = fechaHoy.getFullYear()
            hoy = año + "-" + mes + "-" + dia
    
        }else{
            hoy = props.fecha.getFullYear() + "-" + (props.fecha.getMonth() + 1) + "-" + props.fecha.getDate()
            console.log("Fecha correcta")
            console.log(props.fecha.getDate())
        }

        fetch("https://api.nasa.gov/planetary/apod?api_key=fMVhXiSx4z8QjcizgxcteRshLWqacfa2G69acNHS&date="+hoy)
            .then(res => res.json())
                .then(data => {
                    setUrlImg(data.hdurl)
                    setTitle(data.title)
                    setDescripcion(data.explanation)
                    //console.log(data.hdurl)
            })
            .catch(err => {
                console.log("Error al cargar la imagen")
        })
       }, [props.fecha]);

       /*Estilos*/
       const classes = useStyles();

    return (

        <Grid container >
            <Grid item xs={12} sm={12} md={12}  style={{ padding: 5 , textAlign: "center", margin: "0 auto"}}>

                {/*Encabezado*/}
                <Typography
                    variant="h4" 
                    color="initial"
                    align="center"
                    display="initial"
                    style={{ marginBottom: "20px"}}>
                    Imagen del dia
                </Typography>
                <hr></hr>
                
                <Container fixed>

                    {/*Descripcion, titulo*/}
                    <Typography
                        variant="h6" 
                        color="initial"
                        align="left"
                        display="initial"
                        style={{ marginBottom: "20px", marginTop: "20px"}}
                    >
                        {title}
                    </Typography>
                    
                    {/*Imagen a la izquierda, descripcion a la derecha*/}
                    {/*Imagen*/}
                    <div className={classes.root} xs={12}>
                        <Box  xs={4} align="left" mr={4}>
                            <a target="_blank" href="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY" >
                                <img src={urlImg} alt=""  style={{ maxWidth: "550px", maxHeight: "550px", borderRadius: 8}}/>
                            </a>
                            <div className="desc"></div>
                        </Box>
                        
                        <Paper xs={12}>
                            <Box>
                            <Typography 
                                variant="h5"
                                color="initial"
                                align="left"
                                display="initial"
                                style={{ marginBottom: "20px", marginTop: "20px", marginLeft: "20px"}}
                            >
                                Descripcion
                            </Typography>
                            <Typography 
                                variant="h9"
                                color="initial"
                                align="left"
                                display="initial"
                                style={{ marginBottom: "20px", marginTop: "20px", marginLeft: "20px"}}
                            >
                                <p>{descripcion}</p>
                            </Typography>
                            </Box>
                        </Paper>
                        
                    {/*Descripcion*/} 
                    </div>

                </Container>
            </Grid>
        </Grid>
       
    )
}

export default Galeria
