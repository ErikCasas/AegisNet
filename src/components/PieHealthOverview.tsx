import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieHealthOverView() {
  const nodeStatusData = [
    { label: "Up", value: 23, color: "#10974b" },
    { label: "Critical", value: 7, color: "#fc5602" },
    { label: "Warning", value: 3, color: "#fff12e" },
    { label: "Down", value: 2, color: "#ce0201" },
    { label: "Undefined", value: 5, color: "#9a9a9a" },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <PieChart
        height={400}
        series={[
          {
            data: nodeStatusData.slice(0, 5),
            innerRadius: 0,
            arcLabel: (params) => params.label ?? "",
            arcLabelMinAngle: 20,
            valueFormatter: (item) => `${item.value}`,
          },
        ]}
      />
    </Box>
  );
}
