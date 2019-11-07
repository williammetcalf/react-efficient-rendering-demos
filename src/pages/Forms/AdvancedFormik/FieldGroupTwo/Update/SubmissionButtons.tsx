import React, { FC } from "react";

import { Box, Button, styled } from "@material-ui/core";

interface Props {
  onSave: Function;
}

const SubmissionButtons: FC<Props> = props => {
  const { onSave } = props;

  return (
    <Controls>
      <Button variant="contained" color="primary" onClick={() => onSave()}>
        save
      </Button>
      <Button variant="outlined" color="primary">
        cancel
      </Button>
    </Controls>
  );
};

const Controls = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  "&>*": {
    margin: "0 0.25em"
  }
});

export default SubmissionButtons;
