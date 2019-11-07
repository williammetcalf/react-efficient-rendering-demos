import React, { FC, useState } from "react";

import { Box, Card, CardContent, Tab, Tabs, Typography } from "@material-ui/core";

import PageHeaderRow from "../../components/PageHeaderRow";
import Reducer from "./Reducer";
import Simple from "./Simple";

const Forms: FC = () => {
  const [tab, setTab] = useState<number>(0);

  return (
    <Box>
      <Card>
        <PageHeaderRow>
          <Typography variant="h4">Forms Demo</Typography>
          <Tabs value={tab} onChange={(_, value) => setTab(value)}>
            <Tab label="Simple" value={0} />
            <Tab label="Reducer + Memo" value={1} />
          </Tabs>
        </PageHeaderRow>
        <CardContent>
          {tab === 0 && <Simple />}
          {tab === 1 && <Reducer />}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Forms;
