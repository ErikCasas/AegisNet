import { Stack } from "@mui/material";
import React from "react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="column"
      useFlexGap
      sx={{ flexWrap: "wrap" }}
    >
      {children}
    </Stack>
  );
};
