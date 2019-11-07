import React, { FC, useReducer } from "react";

import { Box } from "@material-ui/core";

import { reducerFn } from "../Reducer/Reducer";
import ToggleItem from "../Reducer/ToggleItem";

const ReducerPlusMemo: FC = () => {
  const [state, dispatch] = useReducer(reducerFn, new Array(200).fill(false));

  return (
    <Box>
      {state.map((val, idx) => (
        <ToggleItem key={idx} toggled={val} index={idx} onClick={dispatch} />
      ))}
    </Box>
  );
};

export default ReducerPlusMemo;
