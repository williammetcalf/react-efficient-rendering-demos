import React, { Dispatch, FC, memo } from "react";

import { styled, TextField } from "@material-ui/core";
import { StandardTextFieldProps } from "@material-ui/core/TextField";

import { State } from "../Simple/use-form-state";

interface Props extends Omit<StandardTextFieldProps, "onChange"> {
  onChange?: Dispatch<{ key: keyof State; value: string }>;
  field: keyof State;
}

const Field: FC<Props> = props => {
  const { value, field, onChange, ...rest } = props;
  console.log("render");

  return (
    <StyledTextField
      value={value || ""}
      onChange={e =>
        onChange && onChange({ key: field, value: e.target.value as string })
      }
      multiline
      rows={3}
      {...rest}
    />
  );
};

const StyledTextField = styled(TextField)({
  margin: "0.5em",
  width: "15em"
});

export default memo(Field);
