import { FastField } from "formik";
import React, { FC } from "react";

import Field from "../Field";

const FieldGroupOne: FC = () => {
  return (
    <>
      <FastField name="field1" component={Field} />
      <FastField name="field2" component={Field} />
      <FastField name="field3" component={Field} />
      <FastField name="field4" component={Field} />
      <FastField name="field5" component={Field} />
      <FastField name="field6" component={Field} />
      <FastField name="field7" component={Field} />
      <FastField name="field8" component={Field} />
      <FastField name="field9" component={Field} />
      <FastField name="field10" component={Field} />
    </>
  );
};

export default FieldGroupOne;
