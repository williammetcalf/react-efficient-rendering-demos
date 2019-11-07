import React, { FC } from "react";

import { AppBar, Box, styled, Toolbar, Typography } from "@material-ui/core";

import InternalLink from "../components/InternalLink";

interface Props {}

const Header: FC<Props> = props => {
  const {} = props;

  return (
    <AppBar position="sticky">
      <StyledToolbar color="primary">
        <Typography variant="h5">Efficient Rendering Demo</Typography>
        <Spacer />
        <InternalLink to="list-state">List State</InternalLink>
      </StyledToolbar>
    </AppBar>
  );
};

const StyledToolbar = styled(Toolbar)({ display: "flex" });
const Spacer = styled(Box)({ width: "5em" });

export default Header;
