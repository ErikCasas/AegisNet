import { Grid } from "@mui/joy";
import { Card } from "@mui/material";

const DashBoardPage: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={8} bgcolor={"violet"} height="100%">
        <Card></Card>
      </Grid>
    </Grid>
  );
};

export default DashBoardPage;
