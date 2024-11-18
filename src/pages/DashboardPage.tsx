import React from "react";
import { Grid, Card, CardContent, Box } from "@mui/material";
import { NetworkMenu } from "../components/NetworkMenu";
import PieHealthOverView from "../components/PieHealthOverview";
import { AlertsTable } from "../components/AlertsTable";
import { MapNodesCenter } from "../components/MapNodesCenters";
import { PhoneNumbersTable } from "../components/PhoneNumbersTable";
import topologyImage from "../../public/topologias.jpg";
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
              <Box
                component="img"
                sx={{
                  height: "100%",
                  width: "100%",
                }}
                alt="This isn´t a image"
                src={topologyImage}
              />
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
