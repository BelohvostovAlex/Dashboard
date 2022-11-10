import React from "react";

import { PageLayout } from "../../layouts/PageLayout";
import { GridToolbar } from "@mui/x-data-grid";

import { mockDataContacts } from "../../data/mockData";
import { Table } from "../../components/Table/Table";

import { columns } from "./tableData";

export const Contacts = () => {
  return (
    <PageLayout
      title="CONTACTS"
      subtitle="List of Contacts for Future Reference"
    >
      <Table
        rows={mockDataContacts}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        components={{ Toolbar: GridToolbar }}
      />
    </PageLayout>
  );
};
