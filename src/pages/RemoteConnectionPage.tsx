import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Modal,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useState } from "react";
import image from "../../public/PcIlustration.webp";

const devicesData = [
  { id: "Device-001" },
  { id: "Device-002" },
  { id: "Device-003" },
  { id: "Device-004" },
  { id: "Device-005" },
];

const RemoteConnectionPage = () => {
  const [deviceId, setDeviceId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConnectClick = () => {
    if (deviceId) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box sx={{ maxWidth: "100%", padding: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ width: "40%" }}>
          <Typography variant="h4" gutterBottom>
            Remote Device Connection
          </Typography>
          <TextField
            label="Device ID"
            variant="outlined"
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
            sx={{ marginRight: 2, width: "100%" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleConnectClick}
          >
            Connect
          </Button>
        </Box>
        <Typography
          variant="h4"
          gutterBottom
          marginTop={4}
          bgcolor="#cccccc"
          maxWidth="min-content"
        >
          Your Device: 9552749134
        </Typography>
      </Box>

      <Typography variant="h4" gutterBottom marginTop={4}>
        Available Devices
      </Typography>
      <Grid container spacing={2}>
        {devicesData.map((device) => (
          <Grid item key={device.id}>
            <Card sx={{ width: 450 }}>
              <CardContent>
                <img src={image} alt="Computer" width="100%" />
                <Typography variant="body1" align="center">
                  {device.id}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <CircularProgress sx={{ marginBottom: 2 }} />
          <Typography variant="h6" gutterBottom>
            Establishing Connection...
          </Typography>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default RemoteConnectionPage;
