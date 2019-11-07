import React, { FC, useState } from "react";

import { Box, Card, CardContent, styled, Tab, Tabs, Typography } from "@material-ui/core";

import Simple from "./Simple";

interface Props {}

const ListState: FC<Props> = props => {
  const {} = props;
  const [tab, setTab] = useState<number>(0);

  return (
    <Box>
      <Card>
        <HeaderRow>
          <Typography variant="h4">List State Demo</Typography>
          <Tabs value={tab} onChange={(_, value) => setTab(value)}>
            <Tab label="Simple" value={0} />
            <Tab label="Reducer" value={1} />
          </Tabs>
        </HeaderRow>
        <CardContent>{tab === 0 && <Simple />}</CardContent>
      </Card>
    </Box>
  );
};

const HeaderRow = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  marginBottom: "1em",
  padding: "1em 2em ",
  borderBottom: "1px solid #eee",
  "&>:not(:last-child)": {
    marginRight: "1em"
  }
});

export default ListState;
