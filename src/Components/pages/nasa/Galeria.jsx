import { Box, Grid, Typography, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import '@fontsource/roboto';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';

//rfce [] {} # {/**/}

function Galeria(props) {

    

    const [fecha, setFecha] = useState() 

    const [urlImg, setUrlImg] = useState()

    /*consulta a la API*/
    useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=fMVhXiSx4z8QjcizgxcteRshLWqacfa2G69acNHS")
            .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setUrlImg(data.hdurl)
                    console.log(fecha)
            })
            .catch(err => {
                console.log("Error al cargar la imagen")
        })
       }, [props.fecha]);

       const Box = styled('div')(compose(spacing, palette))

    return (
        <Grid container >
            <Grid item xs={12} sm={8} md={8}  style={{ padding: 5 , textAlign: "center", margin: "0 auto"}}>

                {/*Encabezado*/}
                <Typography
                    variant="h4" 
                    color="initial"
                    align="center"
                    display="initial"
                    style={{ marginBottom: "20px"}}>
                    Imagen del dia
                </Typography>

                {/*Imagen*/}
                
                <Box>
                    <a target="_blank" href="img_forest.jpg" >
                        <img src={urlImg} alt="Forest"  style={{ maxWidth: "600px", maxHeight: "600px"}}/>
                    </a>
                    <div class="desc">Add a description of the image here</div>
                </Box>
                
            </Grid>
        </Grid>
       
    )
}

export default Galeria