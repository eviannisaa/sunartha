import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import axios from "axios";

function DataGridForWarehouse() {
   const [data, setData] = useState([]);
   const getWarehouseData = async () => {
      await axios
         .get(`https://jsonplaceholder.typicode.com/users`)
         .then((res) => {
            setData(res.data);
         });
   };
   useEffect(() => {
      getWarehouseData();
   }, []);

   const columns = [
      { field: "id", headerName: "WarehouseID", width: 200 },
      { field: "name", headerName: "Branch", width: 350 },
   ];

   const rows = [
      {
         id: "Retail",
         name: data.map((row, index) => row.name),
      },
      {
         id: "VA - Retail",
         name: data.map((row, index) => row.name),
      },
   ];

   // const id = <DataGrid />;

   // const columns = [
   //    { field: "id", headerName: "Warehouse ID", width: 150 },
   //    { field: "name", headerName: "Branch", width: 150 },
   //    { field: "username", headerName: "Active", width: 150 },
   //    { field: "email", headerName: "Desc", width: 150 },
   //    { field: "website", headerName: "Last Sync", width: 150 },
   // ];

   // const rows = data.map((row) => ({
   //    WarehouseID: row.WarehouseID,
   //    Branch: row.Branch,
   //    Active: row.Active,
   //    Description: row.Description,
   //    LastSync: row.LastSync,
   // }));

   // const rows = data.map((row) => ({
   //    id: "Retail",
   //    name: row.name,
   //    username: row.username,
   //    email: row.email,
   //    website: row.website,
   // }));

   console.log(data);

   return (
      <div>
         <div style={{ height: "100vh", width: "100%" }}>
            <DataGrid rows={rows} columns={columns} />
         </div>
      </div>
   );
}

export default DataGridForWarehouse;
