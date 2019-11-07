import { Form, Formik } from "formik";
import React, { FC } from "react";

import { Box, styled } from "@material-ui/core";

import FieldGroupOne from "./FieldGroupOne";
import SubmitButton from "./SubmitButton";

const initialValue = {
  field1: "some default value",
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
  field7: "",
  field8: "",
  field9: "",
  field10: ""
};

const AdvancedFormik: FC = () => {
  return (
    <Formik
      onSubmit={values => console.log(values)}
      initialValues={initialValue}
      validate={values => {
        return Object.keys(values)
          .filter(key => !values[key as keyof typeof values])
          .reduce((errors, key) => ({ ...errors, [key]: "required" }), {});
      }}
    >
      <Form>
        <HeaderRow>
          <SubmitButton />
        </HeaderRow>
        <FieldGroupOne />
      </Form>
    </Formik>
  );
};

const HeaderRow = styled(Box)({
  marginBottom: "1em",
  display: "flex",
  justifyContent: "flex-end"
});

export default AdvancedFormik;
