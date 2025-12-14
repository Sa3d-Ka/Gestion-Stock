import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar - Fixed width */}
      <aside className="w-64 bg-white shadow-lg p-4 sticky top-0 h-screen overflow-y-auto">
        <Sidebar />
      </aside>

      {/* Main Content - Flexible */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;