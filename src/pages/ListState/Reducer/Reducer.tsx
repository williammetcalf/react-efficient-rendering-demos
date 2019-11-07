import React, { FC, useReducer } from "react";

import { Box } from "@material-ui/core";

import ToggleItem from "./ToggleItem";

const reducerFn = (state: boolean[], toggleIndex: number) => {
  return state.map((val, index) => (index === toggleIndex ? !val : val));
};

const Reducer: FC = () => {
  const [state, dispatch] = useReducer(reducerFn, new Array(200).fill(false));

  return (
    <Box>
      {state.map((val, idx) => (
        <ToggleItem key={idx} toggled={val} index={idx} onClick={dispatch} />
      ))}
    </Box>
  );
};

export default Reducer;
