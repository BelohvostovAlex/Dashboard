import React from "react";

import { useTheme, Typography } from "@mui/material";

import { Table } from "../../components/Table/Table";

import { mockDataInvoices } from "../../data/mockData";
import { tokens } from "../../theme";
import { makeStyles } from "./styles";
import { PageLayout } from "../../layouts/PageLayout";

export const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => {
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>;
      },
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <PageLayout title="INVOICES" subtitle="List of Invoice Balances">
      <Table
        rows={mockDataInvoices}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        addCheckbox={true}
      />
    </PageLayout>
  );
};
