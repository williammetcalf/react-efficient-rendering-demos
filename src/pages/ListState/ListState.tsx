import React, { FC, useState } from "react";

import { Box, Card, CardContent, Tab, Tabs, Typography } from "@material-ui/core";

import PageHeaderRow from "../../components/PageHeaderRow";
import Reducer from "./Reducer";
import ReducerPlusMemo from "./ReducerPlusMemo";
import Simple from "./Simple";

const ListState: FC = () => {
  const [tab, setTab] = useState<number>(0);

  return (
    <Box>
      <Card>
        <PageHeaderRow>
          <Typography variant="h4">List State Demo</Typography>
          <Tabs value={tab} onChange={(_, value) => setTab(value)}>
            <Tab label="Simple" value={0} />
            <Tab label="Reducer" value={1} />
            <Tab label="Reducer + Memo" value={2} />
          </Tabs>
        </PageHeaderRow>
        <CardContent>
          {tab === 0 && <Simple />}
          {tab === 1 && <Reducer />}
          {tab === 2 && <ReducerPlusMemo />}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ListState;
