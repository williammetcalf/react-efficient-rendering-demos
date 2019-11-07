import React, { FC, memo } from "react";

import { ButtonBase, styled } from "@material-ui/core";

interface Props {
  toggled: boolean;
  index: number;
  onClick: (idx: number) => any;
}

export const ToggleItem: FC<Props> = props => {
  const { toggled, onClick, index } = props;

  console.log("render");

  return (
    <StyledButtonBase
      onClick={() => onClick(index)}
      style={{ backgroundColor: toggled ? "green" : "red" }}
    />
  );
};

const StyledButtonBase = styled(ButtonBase)({
  width: 30,
  height: 15,
  borderRadius: 7.5,
  margin: "0.2em"
});

export default memo(ToggleItem);
