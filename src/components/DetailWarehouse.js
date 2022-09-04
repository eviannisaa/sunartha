import React, { useEffect, useState } from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import axios from "axios";

function DetailWarehouse() {
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

   // const columns = {
   //    { field: "ID", headerName: "WarehouseID", width: 90 },
   //    { field: "city", headerName: "Branch", width: 150 },
   //    {field: "id", headerName : "WarehouseID", width90},
   // }

   // const rows = [
   //    { id: 1, col1: "Hello", col2: "World" },
   //    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
   //    { id: 3, col1: "MUI", col2: "is Amazing" },
   // ];

   const columns = [
      { field: "id", headerName: "Warehouse ID", width: 150 },
      { field: "name", headerName: "Branch", width: 150 },
      { field: "username", headerName: "Active", width: 150 },
      { field: "email", headerName: "Desc", width: 150 },
      { field: "website", headerName: "Last Sync", width: 150 },
      { field: "address", headerName: "Last Sync", width: 150 },
   ];

   // const rows = data.map((row) => ({
   //    WarehouseID: row.WarehouseID,
   //    Branch: row.Branch,
   //    Active: row.Active,
   //    Description: row.Description,
   //    LastSync: row.LastSync,
   // }));

   const rows = data.map((row) => ({
      id: row.id,
      name: row.name,
      username: row.username,
      email: row.email,
      website: row.website,
   }));

   console.log(data);

   return (
      <div>
         <div style={{ height: "100vh", width: "100%" }}>
            <DataGrid rows={rows} columns={columns} />
         </div>
      </div>
   );
}

export default DetailWarehouse;
