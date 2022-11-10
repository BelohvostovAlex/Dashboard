import React from "react";

import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { makeStyles } from "./styles";
import { tokens } from "../../theme";

export const Table = ({
  rows,
  columns,
  pageSize,
  rowsPerPageOptions,
  style,
  components,
  addCheckbox = false,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const styles = makeStyles({
    columnColor: colors.greenAccent[300],
    columnHeadersColor: colors.blueAccent[700],
    scrollerColor: colors.primary[400],
    toolbarColor: colors.grey[100],
    checkBoxColor: colors.greenAccent[200],
  });

  const mergedStyles = style
    ? { ...style, ...styles.dataGridWrapper }
    : styles.dataGridWrapper;

  return (
    <Box sx={mergedStyles}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        components={components || null}
        checkboxSelection={addCheckbox}
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </Box>
  );
};
