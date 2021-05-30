import './App.css';
import {ThemeProvider} from "@material-ui/core/styles"
import theme from "./Components/themeConfig"
import Contenedor from "./Components/Contenedor"

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor />
    </ThemeProvider>
  );
}

export default App;

