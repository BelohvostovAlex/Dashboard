export const makeStyles = (props) => {
  return {
    header: {
      marginBottom: "30px",
    },
    headerTitle: {
      color: props.headerTitleColor,
      fontWeight: "bold",
      marginBottom: "5px",
    },
    headerSubtitle: {
      color: props.headerSubtitleColor,
    },
  };
};
