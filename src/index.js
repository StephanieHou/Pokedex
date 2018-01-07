import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Home from "./Home/Home";
import Pokedex from "./Pokedex/Pokedex";
import More from "./More/More";

const App = () => (
  <div>
    <nav id="navig">
      <Link to="/Home">Home</Link>
      {"  /  "}
      <Link to="/Pokedex">Pokedex</Link>
      {"  /  "}
      <Link to="/More">More</Link>
    </nav>
    <div>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/Home" component={Home} />
      <Route path="/Pokedex" component={Pokedex} />
      <Route path="/More" component={More} />
    </div>
  </div>
);

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
