import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Box } from "@material-ui/core";

import ListState from "../pages/ListState";
import Header from "./Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Switch>
          <Route exact path="/list-state" component={ListState} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
};

export default App;
