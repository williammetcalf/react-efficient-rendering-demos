import React, { FC, useState } from "react";

import { Box, Card, CardContent, Tab, Tabs, Typography } from "@material-ui/core";

import PageHeaderRow from "../../components/PageHeaderRow";
import AdvancedFormik from "./AdvancedFormik";
import Reducer from "./Reducer";
import Simple from "./Simple";
import ValidateTopDown from "./ValidateTopDown";

const Forms: FC = () => {
  const [tab, setTab] = useState<number>(3);

  return (
    <Box>
      <Card>
        <PageHeaderRow>
          <Typography variant="h4">Forms Demo</Typography>
          <Tabs value={tab} onChange={(_, value) => setTab(value)}>
            <Tab label="Simple" value={0} />
            <Tab label="Reducer + Memo" value={1} />
            <Tab label="Validate (top down)" value={2} />
            <Tab label="Advanced (Formik)" value={3} />
          </Tabs>
        </PageHeaderRow>
        <CardContent>
          {tab === 0 && <Simple />}
          {tab === 1 && <Reducer />}
          {tab === 2 && <ValidateTopDown />}
          {tab === 3 && <AdvancedFormik />}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Forms;
