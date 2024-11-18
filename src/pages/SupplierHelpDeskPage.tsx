import * as React from "react";
import {
  Box,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useState, useEffect } from "react";

interface Ticket {
  id: number;
  title: string;
  status: string;
  provider: string;
  description: string;
}

const providers = ["Provider A", "Provider B", "Provider C", "Provider D"];

const ticketsData: Ticket[] = [
  {
    id: 1,
    title: "Issue with network",
    status: "open",
    provider: "Provider A",
    description: "Network is down in some areas.",
  },
  {
    id: 2,
    title: "Server outage",
    status: "closed",
    provider: "Provider A",
    description: "Server was down and has been fixed.",
  },
  {
    id: 3,
    title: "Configuration change required",
    status: "in-progress",
    provider: "Provider B",
    description: "Need to update server configuration.",
  },
  {
    id: 4,
    title: "High latency issue",
    status: "open",
    provider: "Provider C",
    description: "Latency is high in network communication.",
  },
  {
    id: 5,
    title: "Firmware upgrade",
    status: "pending",
    provider: "Provider D",
    description: "Firmware upgrade is scheduled.",
  },
  {
    id: 6,
    title: "Unresponsive service",
    status: "overdue",
    provider: "Provider B",
    description: "Service is unresponsive and needs attention.",
  },
  {
    id: 7,
    title: "Network security incident",
    status: "closed",
    provider: "Provider C",
    description: "Security breach was handled.",
  },
  {
    id: 8,
    title: "Login issues",
    status: "pending",
    provider: "Provider D",
    description: "Users are unable to log in.",
  },
];

const SupplierHelpDeskPage: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    setSelectedProvider(ticketsData[0].provider);
  }, []);

  const handleProviderChange = (
    _event: React.ChangeEvent<{}>,
    newValue: string
  ) => {
    setSelectedProvider(newValue);
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setFilterStatus(event.target.value);
  };

  const filteredTickets = ticketsData.filter((ticket) => {
    if (selectedProvider && ticket.provider !== selectedProvider) {
      return false;
    }
    if (filterStatus !== "all" && ticket.status !== filterStatus) {
      return false;
    }
    return true;
  });

  return (
    <Box sx={{ maxWidth: "100%", padding: 4 }}>
      <Tabs
        value={selectedProvider}
        onChange={handleProviderChange}
        aria-label="providers tabs"
      >
        {providers.map((provider, index) => (
          <Tab key={index} label={provider} value={provider} />
        ))}
      </Tabs>

      {selectedProvider && (
        <Box sx={{ marginTop: 4 }}>
          <FormControl sx={{ marginBottom: 2, minWidth: 200 }}>
            <InputLabel>Status</InputLabel>
            <Select
              value={filterStatus}
              onChange={handleStatusChange}
              label="Status"
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="closed">Closed</MenuItem>
              <MenuItem value="overdue">Overdue</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="in-progress">In Progress</MenuItem>
            </Select>
          </FormControl>

          <Table sx={{ minWidth: 650 }} aria-label="tickets table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell>{ticket.id}</TableCell>
                  <TableCell>{ticket.title}</TableCell>
                  <TableCell>{ticket.status}</TableCell>
                  <TableCell>{ticket.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default SupplierHelpDeskPage;
