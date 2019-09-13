import React from 'react';
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import FlashCards from "./components/FlashCards";
import CardForm from "./components/CardForm";
import { Container, } from "semantic-ui-react";
import { Route, Switch, } from "react-router-dom";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/flashcards" component={FlashCards}/>
        <Route component={NoMatch} />
        <Route exact path="/cardform" component={CardForm}/>
      </Switch>
    </Container>
  </>
);

export default App;
