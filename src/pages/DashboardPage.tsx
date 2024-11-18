import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { NetworkMenu } from "../components/NetworkMenu";
import PieHealthOverView from "../components/PieHealthOverview";
import { AlertsTable } from "../components/AlertsTable";
import { MapNodesCenter } from "../components/MapNodesCenters";
import { NetworkTopology } from "../components/NetworkTopology";
import { PhoneNumbersTable } from "../components/PhoneNumbersTable";

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
            <Card sx={{ height: "100%", overflowY: "auto" }}>
              <AlertsTable />
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={4} sx={{ height: "100%" }}>
        <Grid container direction="column" spacing={2} sx={{ height: "100%" }}>
          <Grid item sx={{ height: "50%" }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <MapNodesCenter />
              </CardContent>
            </Card>
          </Grid>
          <Grid item sx={{ height: "50%" }}>
            <Card sx={{ height: "100%" }}>
              <CardContent>{/* <NetworkTopology /> */}</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2} sx={{ height: "100%" }}>
        <Card sx={{ height: "100%", overflowY: "scroll" }}>
          <CardContent>
            <PhoneNumbersTable />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashBoardPage;
