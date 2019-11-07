import React, { FC } from "react";
import { Link as NavLink } from "react-router-dom";

import { Button, Link, styled } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";

interface Props extends ButtonProps {
  to: string;
}

const InternalLink: FC<Props> = props => {
  const { to, ...rest } = props;

  return (
    <Link component={NavLink} to={to}>
      <StyledButton variant="outlined" {...rest} />
    </Link>
  );
};

const StyledButton = styled(Button)({
  color: "white",
  textTransform: "none",
  borderColor: "rgba(255,255,255,0.6)"
});

export default InternalLink;
