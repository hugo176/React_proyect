/*Configuraciones de los themes generales*/
import { createMuiTheme } from "@material-ui/core/styles"
import lightBlue from "@material-ui/core/colors/lightBlue"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[500]
        }
    }
})

export default theme;