import React, { ChangeEvent, FC } from "react";

import { Button } from "@material-ui/core";

interface Props {
  values: string[];
  onClick: (e: ChangeEvent<any>) => any;
}

const AddButton: FC<Props> = props => {
  const { onClick, values } = props;

  return (
    <Button
      color="primary"
      variant="contained"
      onClick={() =>
        onClick({
          target: { name: "arr", value: [...values, ""] }
        } as any)
      }
    >
      add
    </Button>
  );
};

export default AddButton;
