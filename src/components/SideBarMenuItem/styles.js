export const makeStyles = (props) => {
  return {
    menuItem: {
      backgroundColor: "transparent",
      color: props.active ? "#868dfb" : props.menuItemColor,
    },
    sideBarTitleDivider: {
      margin: "15px 0 5px 20px",
      color: props.dividerColor,
    },
    sideBarHeaderItem: {
      margin: "10px 0 20px 0",
      color: props.sideBarHeaderItemColor,
      backgroundColor: "transparent",
    },
    burgerItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      ml: "15px",
    },
    sideBarInfoItem: {
      marginBottom: "25px",
    },
    sideBarInfoImgWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    sideBarInfoImg: {
      width: "100px",
      height: "100px",
      cursor: "pointer",
      borderRadius: "50%",
    },
    profileInfo: { textAlign: "center" },
    profileInfoName: {
      color: props.profileInfoNameColor,
      fontWeight: "bold",
      marginTop: "10px",
    },
    profileInfoRole: {
      color: props.profileInfoRoleColor,
    },
  };
};
