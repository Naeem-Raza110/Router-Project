import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar 25% */}
      <div className="w-1/4 bg-[#010205]">
        <Sidebar />
      </div>

      {/* Main Content 75% */}
      <div className="w-3/4 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
