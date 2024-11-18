import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

interface Alert {
  time: string;
  nodeName: string;
  description: string;
}

const alertsData: Alert[] = [
  {
    time: "2024-11-17 08:30:00",
    nodeName: "Firewall - Cisco ASA 5506",
    description: "Critical alert: High CPU usage detected",
  },
  {
    time: "2024-11-17 09:15:00",
    nodeName: "Router - Cisco ISR 4321",
    description: "Warning: Interface down on port G0/1",
  },
  {
    time: "2024-11-17 10:00:00",
    nodeName: "Switch - HP Aruba 2930F",
    description: "Information: Firmware update available",
  },
  {
    time: "2024-11-17 10:45:00",
    nodeName: "Server - Windows Server 2019",
    description: "Critical alert: Memory usage exceeds 90%",
  },
  {
    time: "2024-11-17 11:20:00",
    nodeName: "Firewall - Palo Alto PA-220",
    description: "Warning: Unusual login attempt detected",
  },
  {
    time: "2024-11-17 12:00:00",
    nodeName: "Database - MySQL",
    description: "Critical alert: Database connection lost",
  },

  {
    time: "2024-11-17 10:45:00",
    nodeName: "Server - Windows Server 2019",
    description: "Critical alert: Memory usage exceeds 90%",
  },
  {
    time: "2024-11-17 11:20:00",
    nodeName: "Firewall - Palo Alto PA-220",
    description: "Warning: Unusual login attempt detected",
  },
  {
    time: "2024-11-17 12:00:00",
    nodeName: "Database - MySQL",
    description: "Critical alert: Database connection lost",
  },
  {
    time: "2024-11-17 10:45:00",
    nodeName: "Server - Windows Server 2019",
    description: "Critical alert: Memory usage exceeds 90%",
  },
  {
    time: "2024-11-17 11:20:00",
    nodeName: "Firewall - Palo Alto PA-220",
    description: "Warning: Unusual login attempt detected",
  },
  {
    time: "2024-11-17 12:00:00",
    nodeName: "Database - MySQL",
    description: "Critical alert: Database connection lost",
  },
];

export default function AlertsTable() {
  return (
    <Box sx={{ width: "100%" }}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="alerts table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Node Name</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alertsData.map((alert, index) => (
            <TableRow key={index}>
              <TableCell>{alert.time}</TableCell>
              <TableCell>{alert.nodeName}</TableCell>
              <TableCell>{alert.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
