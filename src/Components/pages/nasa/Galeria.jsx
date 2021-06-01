import { Box, Grid, Typography, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import '@fontsource/roboto';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';

//rfce [] {} # {/**/}

function Galeria(props) {

    const [date, setDete] = useState(new Date()) 

    let fechaHoy = new Date()

    let hoy = ""

    const [urlImg, setUrlImg] = useState()

    const [title, setTitle] = useState()
    
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
                    //console.log(data.hdurl)
            })
            .catch(err => {
                console.log("Error al cargar la imagen")
        })
       }, [props.fecha]);

       const Box = styled('div')(compose(spacing, palette))

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
                {/*Imagen*/}
                
                <Container fixed>
                    <Typography
                        variant="h6" 
                        color="initial"
                        align="left"
                        display="initial"
                        style={{ marginBottom: "20px", marginTop: "20px"}}
                    >
                        {title}
                    </Typography>
                    
                    <Box xs={12} >
                        <Box  xs={4} >
                            <a target="_blank" href="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY" >
                                <img src={urlImg} alt=""  style={{ maxWidth: "600px", maxHeight: "600px", borderRadius: 8}}/>
                            </a>
                            <div className="desc">Add a description of the image here</div>
                        </Box>

                        <Box  xs={4} >
                            <a target="_blank" href="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY" >
                                <img src={urlImg} alt=""  style={{ maxWidth: "600px", maxHeight: "600px", borderRadius: 8}}/>
                            </a>
                            <div className="desc">Add a description of the image here</div>
                        </Box>
                    </Box>
                    
                </Container>
            </Grid>
        </Grid>
       
    )
}

export default Galeria
