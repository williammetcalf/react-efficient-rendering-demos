import { useField } from "formik";
import React, { FC, useState } from "react";

import { Box, Button, Dialog, styled } from "@material-ui/core";

import Update from "./Update";

const FieldGroupTwo: FC = () => {
  const [fieldProps] = useField<string[]>("arrayField");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box>
        <ul>
          {fieldProps.value.map((v, idx) => (
            <li key={idx}>{v}</li>
          ))}
        </ul>
        <Button variant="outlined" onClick={() => setIsOpen(true)}>
          update
        </Button>
      </Box>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <StyledBox>
          <Update
            intialValue={fieldProps.value}
            onSave={value => {
              fieldProps.onChange({ target: { name: fieldProps.name, value } });
              setIsOpen(false);
            }}
          />
        </StyledBox>
      </Dialog>
    </>
  );
};

const StyledBox = styled(Box)({
  padding: "1em"
});

export default FieldGroupTwo;
