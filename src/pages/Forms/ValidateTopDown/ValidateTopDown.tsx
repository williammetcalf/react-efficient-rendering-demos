import React, { FC, useMemo } from "react";

import { styled } from "@material-ui/core";

import useFormState, { State } from "../Simple/use-form-state";
import Field from "./Field";

const ValidateTopDown: FC = () => {
  const [state, dispatch] = useFormState();
  const arr = useMemo(() => new Array(16).fill(0).map((_, idx) => idx + 1), []);

  const errors = Object.keys(state).reduce<
    Partial<{ [K in keyof State]: string }>
  >((errors, key) => {
    if (!state[key as keyof State])
      return { ...errors, [key]: `${key} is required` };
    return errors;
  }, {});

  return (
    <StyledForm>
      {arr.map(idx => {
        const key = `field${idx}` as keyof State;
        return (
          <Field
            key={idx}
            label={`Field ${idx}`}
            value={state[key]}
            field={key}
            onChange={dispatch}
            error={!!errors[key]}
            helperText={errors[key]}
          />
        );
      })}
    </StyledForm>
  );
};

const StyledForm = styled("form")({
  display: "flex",
  flexWrap: "wrap"
});

export default ValidateTopDown;
