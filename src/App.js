import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Headers from "./Components/Headers/Headers";

import Mainlogin from "./Components/Login/Mainlogin";
import MainRegister from "./Components/Register/MainRegister";
import MainSecondPart from "./Components/Headers/SecondPart/MainSecondPart";
import SecondPartLeft from "./Components/Headers/SecondPart/SecondPartLeft";
import SecondPartRight from "./Components/Headers/SecondPart/SecondPartRight";
function App() {
  // const token = localStorage.getItem("user");

  // const auth = token === null ? false : true;
  return (
    <Router>
      <Container>
        <Headers exact path="/" />
        <Switch>
          <Route exact path="/Login" component={Mainlogin} />
          <Route exact path="/Register" component={MainRegister} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
