import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

import { Typography, useTheme } from "@mui/material";
import { SideBarTitleDivider } from "./SideBarTitleDivider";
import { tokens } from "../../theme";

import { makeStyles } from "./styles";

export const SideBarMenuItem = ({
  title,
  linkTo,
  icon,
  selected,
  setSelected,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const styles = makeStyles({
    menuItemColor: colors.grey[100],
    active: selected === title,
  });

  const addTypography =
    title === "Dashboard" ? (
      <SideBarTitleDivider title="Data" color={colors.grey[300]} />
    ) : title === "FAQ Page" ? (
      <SideBarTitleDivider title="Charts" color={colors.grey[300]} />
    ) : title === "Invoices Balances" ? (
      <SideBarTitleDivider title="Pages" color={colors.grey[300]} />
    ) : null;

  return (
    <>
      <MenuItem
        routerLink={<Link to={linkTo} />}
        style={styles.menuItem}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
      {addTypography}
    </>
  );
};
