export const makeStyles = (props) => {
  return {
    topBarWrapper: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
    },
    searchBar: {
      display: "flex",
      backgroundColor: props.searchBarColor,
      borderRadius: "3px",
    },
    topBarInput: {
      marginLeft: "10px",
      flex: 1,
    },
    topBarInputBtn: {
      padding: "6px",
    },
    buttonsGroup: {
      display: "flex",
    },
  };
};
