import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { Container, styled } from "@material-ui/core";

import Forms from "../pages/Forms";
import ListState from "../pages/ListState";
import Header from "./Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <StyledContainer maxWidth="lg">
        <Switch>
          <Route exact path="/list-state" component={ListState} />
          <Route exact path="/forms" component={Forms} />
          <Redirect to="/forms" />
        </Switch>
      </StyledContainer>
    </BrowserRouter>
  );
};

const StyledContainer = styled(Container)({
  marginTop: "3em"
});

export default App;
