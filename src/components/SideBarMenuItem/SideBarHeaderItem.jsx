import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { MenuItem } from "react-pro-sidebar";

import { makeStyles } from "./styles";

export const SideBarHeaderItem = ({
  onClick,
  collapsed,
  icon,
  title,
  color,
}) => {
  const styles = makeStyles({ sideBarHeaderItemColor: color });
  return (
    <MenuItem
      onClick={onClick}
      icon={collapsed ? icon : undefined}
      style={styles.sideBarHeaderItem}
    >
      {!collapsed && (
        <Box sx={styles.burgerItem}>
          <Typography variant="h3">{title}</Typography>
          <IconButton onClick={onClick}>{icon}</IconButton>
        </Box>
      )}
    </MenuItem>
  );
};
