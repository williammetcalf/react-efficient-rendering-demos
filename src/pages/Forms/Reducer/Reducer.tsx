import React, { FC, useMemo } from "react";

import { styled } from "@material-ui/core";

import useFormState, { State } from "../Simple/use-form-state";
import Field from "./Field";

const Reducer: FC = () => {
  const [state, dispatch] = useFormState();
  const arr = useMemo(() => new Array(16).fill(0).map((_, idx) => idx + 1), []);

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

export default Reducer;
