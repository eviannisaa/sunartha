import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Link, Breadcrumbs } from "@mui/material";

function DetailWarehouse() {
   const params = useParams();
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   console.log(params.id);
   const getWarehouseData = async () => {
      await axios
         .get(`https://api.belajartableau.com/api/WarehouseReps/${params.id}`)
         .then((res) => {
            setData(res.data);
            console.log(res.data);
         });
   };
   useEffect(() => {
      getWarehouseData();
      setLoading(false);
   }, []);

   const columns = [
      { field: "id", headerName: "WarehouseID", width: 110 },
      { field: "branch", headerName: "Branch", width: 110 },
      { field: "active", headerName: "Active", width: 110 },
      { field: "description", headerName: "Description", width: 110 },
      { field: "lastSync", headerName: "LastSync", width: 220 },
      { field: "lastmodified", headerName: "LastModifiedDateTime", width: 220 },
   ];

   const rows = [
      {
         id: params.id,
         branch: data.Branch,
         active: data.Active,
         description: data.Description,
         lastSync: data.LastSync,
         lastmodified: data.LastModifiedDateTime,
      },
   ];

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
            <Link underline="none" color="primary">
               Detail
            </Link>
         </Breadcrumbs>

         <div>
            {loading === true ? (
               "loading"
            ) : (
               <div className="data-grid">
                  <DataGrid
                     rows={rows}
                     columns={columns}
                     pageSize={5}
                     rowsPerPageOptions={[5]}
                  />
               </div>
            )}
         </div>
      </div>
   );
}

export default DetailWarehouse;
