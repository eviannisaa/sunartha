import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DataGridForWarehouse from "./components/DataWarehouse";
import DetailWarehouse from "./components/DetailWarehouse";
import "./App.css";

function App() {
   return (
      <div className="container">
         <div className="sidebar">
            <div className="logo">
               <SettingsIcon style={{ color: "white" }} />
               <h1>Test</h1>
            </div>
            <div>
               <div className="wrapper">Menu</div>
               <div className="sidebar-menu wrapper">
                  <DashboardIcon style={{ color: "white" }} />
                  <span>Warehouse</span>
               </div>
            </div>
         </div>
         <div className="layout-content">
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<DataGridForWarehouse />} />
                  <Route path="/:id" element={<DetailWarehouse />} />
               </Routes>
            </BrowserRouter>
         </div>
      </div>
   );
}

export default App;
