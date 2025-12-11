import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <main className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-4">
        <Sidebar />
      </aside>

      <section className="flex-1 p-6">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
