import * as React from "react";
import Layout from "../../Shared/Layout"
import { DataGrid } from "@mui/x-data-grid";
import  "./style.css"
import { useNavigate } from "react-router-dom";

const columns = [
  {
    field: "firstName",
    headerName: "First Name",
    width: 300,
    headerClassName: "custom-header",
    headerAlign: "center",
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 300,
    headerClassName: "custom-header",
    headerAlign: "center",
  },

  {
    field: "userName",
    headerName: "User Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    headerClassName: "custom-header",
    headerAlign: "center",
  },
  {
    field: "role",
    headerName: "Role",
    width: 300,
    headerClassName: "custom-header",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    width: 288,
    headerClassName: "custom-header",
    headerAlign: "center",
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    userName: "Snow",
    role: "user",

    status: "active",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    userName: "Snow",
    role: "user",

    status: "active",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    userName: "Snow",
    role: "user",

    status: "active",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    userName: "Snow",
    role: "admin",

    status: "active",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    userName: "Snow",
    role: "admin",

    status: "active",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    userName: "Snow",
    role: "admin",

    status: "active",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    userName: "Snow",
    role: "admin",

    status: "active",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    userName: "Snow",
    role: "admin",
    status: "active",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    userName: "Snow",
    role: "admin",

    status: "active",
  },
];


export default function Users() {
  const navigate = useNavigate();

  const handleRowClick = (params) => {
    const userId = params.row.id; 
    navigate(`/users/${userId}`); 
  };
  return (
    <Layout>
      <div className="table-body" style={{ marginTop:"15vh",height: 400, width: "70%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={handleRowClick}
        />
      </div>
    </Layout>
  );
}
