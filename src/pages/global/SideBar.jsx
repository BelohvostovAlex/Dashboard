import React, { useState } from "react";
import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { makeStyles } from "./styles/sideBarStyle";

import { MenuOutlined } from "@mui/icons-material";
import { SideBarMenuItem } from "../../components/SideBarMenuItem/SideBarMenuItem";

import { menuItems } from "../../data/mockMenuItems";
import { SideBarHeaderItem } from "../../components/SideBarMenuItem/SideBarHeaderItem";
import { SideBarInfoItem } from "../../components/SideBarMenuItem/SideBarInfoItem";

export const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styles = makeStyles({
    sideBarWrapperBg: colors.primary[400],
  });

  const { collapseSidebar, collapsed } = useProSidebar();

  const [selected, setSelected] = useState("Dashboard");

  const toggleSideBar = () => collapseSidebar(!collapsed);

  return (
    <Box sx={styles.sideBarWrapper}>
      <Sidebar style={styles.sideBar} backgroundColor={"transparent"}>
        <Menu>
          <SideBarHeaderItem
            title="Admin"
            collapsed={collapsed}
            onClick={toggleSideBar}
            icon={<MenuOutlined />}
            color={colors.grey[100]}
          />
          {!collapsed && (
            <SideBarInfoItem
              name="Alex Belo"
              role="Mr Admin"
              src={`../../assets/user.png`}
              colorName={colors.grey[100]}
              colorRole={colors.greenAccent[500]}
            />
          )}
          <Box>
            {menuItems.map(({ title, to, icon }) => (
              <SideBarMenuItem
                title={title}
                linkTo={to}
                icon={icon}
                selected={selected}
                setSelected={setSelected}
                key={title}
              />
            ))}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};
