import React from "react";

import { Box } from "@mui/material";
import { Header } from "../components/Header/Header";

import { makeStyles } from "./styles";

export const PageLayout = ({ title, subtitle, children }) => {
  const styles = makeStyles();
  return (
    <Box sx={styles.layoutWrapper}>
      <Header title={title} subtitle={subtitle} />
      {children}
    </Box>
  );
};
