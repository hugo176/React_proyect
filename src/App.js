import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import NavBar from "./Components/Navbar"

//rfce [] {} #
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
          <Switch>
            <Route path="/" />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
