import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
  Settings,
  FileText,
  Bell,
  Search,
  ChevronDown,
  BarChart3,
  Warehouse,
  FolderTree,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", path: "/" },
    {
      id: "products",
      icon: Package,
      label: "Products",
      path: "/products",
    },
    { id: "categories", icon: FolderTree, label: "Categories", path: "/categories" },
    { id: "suppliers", icon: Users, label: "Suppliers", path: "/suppliers" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
            <Package className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">StockFlow</h1>
            <p className="text-xs text-gray-500">Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <Link key={item.id} to={item.path}>
              <button
                onClick={() => {
                  setActiveItem(item.id);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeItem === item.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span className="font-medium text-sm">{item.label}</span>
                </div>
              </button>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="pt-6 border-t border-gray-200 space-y-1">
        {/* User Profile */}
        <div className="mt-4 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">
                John Doe
              </p>
              <p className="text-xs text-gray-500 truncate">john@company.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
