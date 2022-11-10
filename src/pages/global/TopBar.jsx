import React, { useContext } from "react";
import { Box, IconButton, useTheme, InputBase } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
  Search,
} from "@mui/icons-material";

import { makeStyles } from "./styles/topBarStyle";

export const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(ColorModeContext);
  const styles = makeStyles({ searchBarColor: colors.primary[400] });

  return (
    <Box sx={styles.topBarWrapper}>
      <Box sx={styles.searchBar}>
        <InputBase sx={styles.topBarInput} placeholder="Search" />
        <IconButton type="button" sx={styles.topBarInputBtn}>
          <Search />
        </IconButton>
      </Box>
      <Box sx={styles.buttonsGroup}>
        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};
