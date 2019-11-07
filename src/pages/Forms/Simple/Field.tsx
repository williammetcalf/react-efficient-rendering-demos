import React, { FC } from "react";

import { styled, TextField } from "@material-ui/core";
import { StandardTextFieldProps } from "@material-ui/core/TextField";

const Field: FC<StandardTextFieldProps> = props => {
  const { value, ...rest } = props;
  console.log("render");

  return <StyledTextField value={value || ""} multiline rows={3} {...rest} />;
};

const StyledTextField = styled(TextField)({
  margin: "0.5em",
  width: "15em"
});

export default Field;
