import React from "react";

import { Box, Typography } from "@mui/material";

import { makeStyles } from "./styles";

export const SideBarInfoItem = ({ name, role, src, colorRole, colorName }) => {
  const styles = makeStyles({
    profileInfoRoleColor: colorRole,
    profileInfoNameColor: colorName,
  });
  return (
    <Box sx={styles.sideBarInfoItem}>
      <Box sx={styles.sideBarInfoImgWrapper}>
        <Box
          component="img"
          alt="profile-user"
          src={src}
          sx={styles.sideBarInfoImg}
        />
      </Box>
      <Box sx={styles.profileInfo}>
        <Typography variant="h2" sx={styles.profileInfoName}>
          {name}
        </Typography>
        <Typography variant="h5" sx={styles.profileInfoRole}>
          {role}
        </Typography>
      </Box>
    </Box>
  );
};
