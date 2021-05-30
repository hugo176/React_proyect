import React from 'react';
import {
    makeStyles,
    Hidden
} from "@material-ui/core";
import Navbar from './Navbar';
import Cajon from "./Cajon";
import Cajita from "./Cajita";
import Pokemones from "./pages/pokemon/Pokemones"
import Nasa from "./pages/nasa/Nasa"

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

/*Contenedor principal*/
const Contenedor = () => {

    const classes = useStyles();

    const [abrir, setAbrir] = React.useState(false);

    const accionAbrir = () => {
        setAbrir(!abrir)
        console.log("click")
    };

    return (
        <div className={classes.root}>
            <Navbar accionAbrir={accionAbrir} />
            <Hidden xsDown>
                <Cajon 
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            <Hidden smUp>
                <Cajon 
                    variant="temporary"
                    open={abrir}
                    onClose={accionAbrir}
                />
            </Hidden>
            <div className={classes.content}>
                <div className={classes.toolbar}>
                </div>
                {/* <Cajita /> */}
                <Nasa />
            </div>
        </div>
    )
}

export default Contenedor
