import React from "react";

import { Typography } from "@mui/material";

import { makeStyles } from "./styles";

export const SideBarTitleDivider = ({ title, color }) => {
  const styles = makeStyles({ dividerColor: color });
  return (
    <Typography variant="h6" sx={styles.sideBarTitleDivider}>
      {title}
    </Typography>
  );
};
