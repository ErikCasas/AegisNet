import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { NetworkMenu } from "../components/NetworkMenu";
import PieHealthOverView from "../components/PieHealthOverview";

const DashBoardPage: React.FC = () => {
  return (
    <Grid
      container
      spacing={2}
      bgcolor="#12599f"
      sx={{ height: "calc(100vh - 64px)", padding: 2 }}
    >
      <Grid item xs={2} sx={{ height: "100%" }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <NetworkMenu />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} sx={{ height: "100%" }}>
        <Grid container direction="column" spacing={2} sx={{ height: "100%" }}>
          <Grid item sx={{ height: "50%" }}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PieHealthOverView />
            </Card>
          </Grid>
          <Grid item sx={{ height: "50%" }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6">Columna 2 - Card 2</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={4} sx={{ height: "100%" }}>
        <Grid container direction="column" spacing={2} sx={{ height: "100%" }}>
          <Grid item sx={{ height: "50%" }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6">Columna 3 - Card 1</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sx={{ height: "50%" }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6">Columna 3 - Card 2</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2} sx={{ height: "100%" }}>
        <Card sx={{ height: "100%" }}>
          <CardContent>
            <Typography variant="h6">Columna 4</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashBoardPage;
