import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Listado from "./container/Listado";
import Main from "./container/Main";
import Header from "./container/Header";
import Footer from "./container/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/listado">
          <Listado />
        </Route>
        <Route path="/" component={Main}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
