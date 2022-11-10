import React from "react";

import { Box } from "@mui/material";

import { Header } from "../../components/Header/Header";

import { makeStyles } from "./styles";

export const DashBoard = () => {
  const styles = makeStyles();
  return (
    <Box sx={styles.dashboard}>
      <Box sx={styles.headerWrapper}>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};
