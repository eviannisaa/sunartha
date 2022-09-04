import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "./App.css";
import DataGridForWarehouse from "./components/DataGrid";
import { Link } from "@mui/material";

function App() {
   return (
      <div className="container">
         <div className="sidebar">
            <div className="logo">
               <SettingsIcon style={{ color: "white" }} />
               <h1>Test</h1>
            </div>
            <div>
               <div className="wrapper">Test menu</div>
               <div className="sidebar-menu wrapper">
                  <DashboardIcon style={{ color: "white" }} />
                  <span>Test Shift Warehouse</span>
               </div>
            </div>
         </div>
         <div className="layout-content">
            {/* <div style={{ display: "flex", height: "100%" }}>
               <div style={{ flexGrow: 1 }}>
                  <DataGrid {...data} />
               </div>
            </div> */}
            <DataGridForWarehouse />

            <Link href="https://jsonplaceholder.typicode.com/users">link</Link>
         </div>
      </div>
   );
}

export default App;
