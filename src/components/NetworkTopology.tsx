import { Network } from "react-vis-network";
import Box from "@mui/material/Box";

const data = {
  nodes: [
    { id: 1, label: "Router 1", shape: "triangle", color: "red" },
    { id: 2, label: "Router 2", shape: "triangle", color: "red" },
    { id: 3, label: "Router 3", shape: "triangle", color: "red" },
    { id: 4, label: "Switch 1", shape: "box", color: "blue" },
    { id: 5, label: "Switch 2", shape: "box", color: "blue" },
    { id: 6, label: "Switch 3", shape: "box", color: "blue" },
    { id: 7, label: "Switch 4", shape: "box", color: "blue" },
    { id: 8, label: "Switch 5", shape: "box", color: "blue" },
    { id: 9, label: "Computer 1", shape: "dot", color: "green" },
    { id: 10, label: "Computer 2", shape: "dot", color: "green" },
    { id: 11, label: "Computer 3", shape: "dot", color: "green" },
    { id: 12, label: "Computer 4", shape: "dot", color: "green" },
    { id: 13, label: "Computer 5", shape: "dot", color: "green" },
    { id: 14, label: "Cloud 1", shape: "diamond", color: "orange" },
    { id: 15, label: "Cloud 2", shape: "diamond", color: "orange" },
  ],
  edges: [
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 2, to: 6 },
    { from: 2, to: 7 },
    { from: 3, to: 8 },
    { from: 4, to: 9 },
    { from: 4, to: 10 },
    { from: 5, to: 11 },
    { from: 6, to: 12 },
    { from: 7, to: 13 },
    { from: 1, to: 14 },
    { from: 3, to: 15 },
  ],
};

export default function NetworkTopology() {
  return (
    <Box sx={{ width: "100%", height: 500, padding: 2 }}>
      <Network
        data={data}
        options={{ autoResize: true, height: "100%", width: "100%" }}
      />
    </Box>
  );
}
