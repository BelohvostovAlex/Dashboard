export const makeStyles = (props) => ({
  formWrapper: {
    display: "grid",
    gap: "30px",
    gridTemplateColumns: "repeat(4, minmax(0,1fr))",
  },
  textFieldSpan2: {
    gridColumn: props.isNonMobile ? "span 2" : "span 4",
  },
  textFieldSpan4: {
    gridColumn: "span 4",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "end",
    marginTop: "20px",
  },
});
