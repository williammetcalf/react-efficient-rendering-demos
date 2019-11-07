import { Box, styled } from "@material-ui/core";

const PageHeaderRow = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  marginBottom: "1em",
  padding: "1em 2em ",
  borderBottom: "1px solid #eee",
  "&>:not(:last-child)": {
    marginRight: "1em"
  }
});
export default PageHeaderRow;
