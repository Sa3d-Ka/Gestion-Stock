import React from "react";
import { LayoutDashboard, Package, FolderTree, Truck } from "lucide-react";
import { NavLink } from "react-router-dom";
import assets from "../assets/assets";

const Sidebar = () => {
  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { id: "products", icon: Package, label: "Products", path: "/products" },
    {
      id: "categories",
      icon: FolderTree,
      label: "Categories",
      path: "/categories",
    },
    { id: "suppliers", icon: Truck, label: "Suppliers", path: "/suppliers" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
            <img src={assets.logo} alt="logo" className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">CMCStock</h1>
            <p className="text-xs text-gray-500">Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-4">
          Navigation
        </p>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                end={item.path === "/"} // Important for root path
                className={({ isActive }) =>
                  `w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      size={20}
                      className={isActive ? "text-white" : "text-gray-600"}
                    />
                    <span className="font-medium text-sm ml-3">
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="pt-6 border-t border-gray-200">
        {/* User Profile */}
        <div className="p-3 bg-linear-to-r from-gray-50 to-gray-100 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold">
              SK
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">
                Saad Kanani
              </p>
              <p className="text-xs text-gray-500 truncate">saad@company.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
