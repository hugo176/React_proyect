import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import AdbIcon from '@material-ui/icons/Adb';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';


//rfce [] {} #

export const Lista = () => {
    return (
        <div>
            <List component="nav">

                {/*Home*/}
                <ListItem button="true" autoFocus="true">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItem>

                {/*Nasa*/}
                <ListItem button="true">
                    <ListItemIcon>
                        <AdbIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pokemon"/>
                </ListItem>

                {/*Pokemon*/}
                <ListItem button="true">
                    <ListItemIcon>
                        <AllInclusiveIcon />
                    </ListItemIcon>
                    <ListItemText primary="Nasa"/>
                </ListItem>

                <Divider />
            </List>
        </div>
    )
}

export default Lista