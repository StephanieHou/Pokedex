import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import Pokedex from "./Pokedex";
import More from "./More";

const App = () => ( 
  <div>
    <nav id="navig">
      <Link to="/">Home</Link>
      {"  /  "}
      <Link to="/Pokedex">Pokedex</Link>
      {"  /  "}
      <Link to="/More">More</Link>
    </nav>
    <div>
      <Route exact path="/" component={Home} />
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
