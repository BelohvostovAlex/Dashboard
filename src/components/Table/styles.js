export const makeStyles = (props) => {
  return {
    dataGridWrapper: {
      "& .MuiDataGrid-root": {
        border: "none",
      },
      margin: "40px 0 0 0",
      height: "70vh",
      "& .MuiDataGrid-cell": {
        borderBottom: "none",
      },
      "& .name-column--cell": {
        color: props.columnColor,
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: props.columnHeadersColor,
        borderBottom: "none",
      },
      "& .MuiDataGrid-columnSeparator": {
        opacity: "0 !important",
      },
      "& .MuiDataGrid-virtualScroller": {
        backgroundColor: props.scrollerColor,
      },
      "& .MuiDataGrid-footerContainer": {
        borderTop: "none",
        backgroundColor: props.columnHeadersColor,
      },
      "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
        color: `${props.toolbarColor} !important`,
      },
      "& .MuiCheckbox-root": {
        color: `${props.checkBoxColor} !important`,
      },
    },
  };
};
