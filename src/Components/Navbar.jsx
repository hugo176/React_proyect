import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from '@material-ui/core';

/*Estilos*/
const useStyles = makeStyles(theme => ({
    
    //Agreagar un margen al lado derecho del boton icono
    menuButton: {
        //multiplica la base(8) por el spacing(2)
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

    title: {
        flexGrow: 1
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: 'calc(100% - 240px)',
            marginLeft: 240,
        },
    },
}))

/*Navbar*/
function Navbar(props) {

    //const [sidebar, setSidebar] = useState(false)

    //const showSidebar = () => setSidebar(!sidebar)

    const classes  = useStyles()

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            
            {/*Barra de herramientas*/}
             <Toolbar>

                {/*Icono boton*/}
                <IconButton 
                    color="inherit"  
                    aria-label="menu" 
                    className={classes.menuButton} 
                    onClick={() => props.accionAbrir()}>
                    <MenuIcon />
                </IconButton>

                <Typography variant="h6" className={classes.title}>
                    Menu
                </Typography>

                <Button variant="text" color="inherit">
                    Login
                </Button> 

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
