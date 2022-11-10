export const columns = [
  { field: "id", headerName: "ID", flex: 0.5 },
  { field: "registerId", headerName: "Register ID" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "address", headerName: "Address", flex: 1 },
  { field: "city", headerName: "City", flex: 1 },
  { field: "zipCode", headerName: "ZipCode", flex: 1 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerAlign: "left",
    align: "left",
  },
  { field: "phone", headerName: "Phone Number", flex: 1 },
];
