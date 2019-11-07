import React, { FC } from "react";

import { Button } from "@material-ui/core";

const SubmitButton: FC = () => {
  return (
    <Button type="submit" color="primary" variant="contained">
      submit
    </Button>
  );
};

export default SubmitButton;
