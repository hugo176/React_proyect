import React from 'react'
import {Box, Grid} from "@material-ui/core"

//rfce [] {} #

function Cajita() {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6} md={4} >
                    <Box
                        border={2}
                    >
                        xs12
                    </Box>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={6}>
                    <Box
                        border={2}
                    >
                        xs12
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box
                        border={2}
                    >
                        xs12
                    </Box>
                </Grid>
            </Grid>

            <Box 
                color = "primary.constrastText"
                bgcolor="primary.main"    
            >
                hola
            </Box>

            <Box 
                color = "primary.constrastText"
                bgcolor="primary.main"  
                mx={2}
                my={2}
                px={5}
                py={5}
            >
                hola
            </Box>

            <Box
                m={5} 
                p={5}
                border={1}
                borderColor="error.main"
            >
                hola
            </Box>
        </div>
    )
}

export default Cajita
