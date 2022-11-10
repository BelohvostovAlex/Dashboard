import React from "react";

import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { makeStyles } from "./styles";

export const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styles = makeStyles({
    headerTitleColor: colors.grey[100],
    headerSubtitleColor: colors.greenAccent[400],
  });
  return (
    <Box sx={styles.header}>
      <Typography variant="h2" sx={styles.headerTitle}>
        {title}
      </Typography>
      <Typography sx={styles.headerSubtitle}>{subtitle}</Typography>
    </Box>
  );
};
