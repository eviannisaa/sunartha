import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link, Breadcrumbs } from "@mui/material";

function DataGridForWarehouse() {
   const [data, setData] = useState([]);
   const getWarehouseData = async () => {
      await axios
         .get(`https://api.belajartableau.com/api/WarehouseReps`)
         .then((res) => {
            setData(res.data);
         });
   };

   useEffect(() => {
      getWarehouseData();
   }, []);

   const columns = [
      {
         field: "id",
         headerName: "WarehouseID",
         width: 150,
         renderCell: (cellValues) => {
            return (
               <Link href={`/${cellValues.value}`}>{cellValues.value}</Link>
            );
         },
      },
      { field: "name", headerName: "Branch", width: 150 },
      { field: "active", headerName: "Active", width: 150 },
      { field: "description", headerName: "Desc", width: 150 },
      { field: "lastSync", headerName: "LastSync", width: 250 },
   ];

   const rows = data.map((row) => ({
      id: row.WarehouseID,
      name: row.Branch,
      active: row.Active,
      description: row.Description,
      lastSync: row.LastSync,
   }));

   console.log(data);

   return (
      <div className="container-data-grid">
         <Breadcrumbs aria-label="breadcrumb">
            <Link underline="none" color="primary" href="#">
               Home
            </Link>
            <Link underline="hover" color="primary" href="/">
               Warehouse
            </Link>
         </Breadcrumbs>
         <div className="data-grid">
            <DataGrid
               rows={rows}
               columns={columns}
               pageSize={5}
               rowsPerPageOptions={[5]}
            />
         </div>
      </div>
   );
}

export default DataGridForWarehouse;
