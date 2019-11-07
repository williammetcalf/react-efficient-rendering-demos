import { FastFieldProps } from "formik";
import { isEqual } from "lodash";
import React, { FC, memo } from "react";

import { styled } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const Field: FC<FastFieldProps> = props => {
  const { field, form } = props;
  const { name } = field;
  const displayError = !!form.touched[name] && !!form.errors[name];

  return (
    <StyledTextField
      label={name}
      {...field}
      autoComplete="off"
      error={displayError}
      helperText={displayError ? form.errors[name] : undefined}
    />
  );
};

const StyledTextField = styled(TextField)({
  margin: "0.5em"
});

export default memo(Field, (prev, props) =>
  isEqual(
    {
      name: prev.field.name,
      value: prev.field.value,
      error: prev.form.errors[prev.field.name],
      touched: prev.form.touched[prev.field.name]
    },
    {
      name: props.field.name,
      value: props.field.value,
      error: props.form.errors[props.field.name],
      touched: props.form.touched[props.field.name]
    }
  )
);
