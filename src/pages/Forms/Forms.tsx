import React, { FC, useState } from "react";

import { Box, Card, CardContent, styled, Tab, Tabs, Typography } from "@material-ui/core";

import PageHeaderRow from "../../components/PageHeaderRow";

const Forms: FC = () => {
  const [tab, setTab] = useState<number>(0);

  return (
    <Box>
      <Card>
        <PageHeaderRow>
          <Typography variant="h4">Forms Demo</Typography>
          <Tabs value={tab} onChange={(_, value) => setTab(value)}>
            <Tab label="Simple" value={0} />
          </Tabs>
        </PageHeaderRow>
        <CardContent></CardContent>
      </Card>
    </Box>
  );
};

export default Forms;
