import React from 'react'
import Lista from "./Lista"
import { makeStyles, Drawer, Divider} from "@material-ui/core"
import SidebarData from "./SidebarData"
import { List } from "@material-ui/core";

const drawerWidth = 240;

const useStyle = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}))

/*Cajon, contiene a los elementos en la barra lateral(izquierda)*/
const Cajon = (props) => {
    const classes = useStyle()

    return (
        <Drawer 
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            variant={props.variant}
            open = {props.open}
            onClose={props.onClose ? props.onClose : null}
        >

            <div className={classes.toolbar}>
            </div>

            {/*Linea divisoria*/}
            <Divider />

            {/*Lista de elementos del cajon*/}
            <Lista />
            

        </Drawer>
    )
}

export default Cajon
