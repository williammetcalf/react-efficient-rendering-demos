import { FastField, Formik } from "formik";
import React, { FC, useMemo } from "react";

import { Box, styled } from "@material-ui/core";

import Field from "../../Field";
import AddButton from "./AddButton";
import SubmissionButtons from "./SubmissionButtons";

interface Props {
  intialValue: string[];
  onSave: (value: string[]) => any;
}

const Update: FC<Props> = props => {
  const { onSave } = props;
  const initialValue = useMemo(() => ({ arr: props.intialValue }), []);

  return (
    <Formik initialValues={initialValue} onSubmit={console.log}>
      {({ values, handleChange }) => (
        <StyledBox>
          {values.arr.map((_, idx) => (
            <FastField key={idx} name={`arr[${idx}]`} component={Field} />
          ))}
          <AddButton values={values.arr} onClick={handleChange} />
          <SubmissionButtons onSave={() => onSave(values.arr)} />
        </StyledBox>
      )}
    </Formik>
  );
};

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  "&>:not(:last-child)": {
    marginBottom: "1em"
  }
});

export default Update;
