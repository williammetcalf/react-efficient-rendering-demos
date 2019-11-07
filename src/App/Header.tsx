import React, { FC } from "react";

import { AppBar, Box, styled, Toolbar, Typography } from "@material-ui/core";

import InternalLink from "../components/InternalLink";

const Header: FC = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar color="primary">
        <Typography variant="h5">Efficient Rendering Demo</Typography>
        <Spacer />
        <InternalLink to="list-state">List State</InternalLink>
        <InternalLink to="forms">Forms</InternalLink>
      </StyledToolbar>
    </AppBar>
  );
};

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  "&>:not(:last-child)": {
    marginRight: "0.7em"
  }
});
const Spacer = styled(Box)({ width: "5em" });

export default Header;
