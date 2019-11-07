import React, { FC, useState } from "react";

import { Box } from "@material-ui/core";

import ToggleItem from "./ToggleItem";

const Simple: FC = () => {
  const [state, setState] = useState(new Array(200).fill(false));

  return (
    <Box>
      {state.map((val, idx1) => (
        <ToggleItem
          key={idx1}
          toggled={val}
          onClick={() => {
            setState(state.map((val, idx2) => (idx1 === idx2 ? !val : val)));
          }}
        />
      ))}
    </Box>
  );
};

export default Simple;
