import React from "react";
import {
  AlertTriangle,
  Boxes,
  BoxIcon,
  DollarSign,
  FolderTree,
  TriangleAlert,
} from "lucide-react";
import Card from "../components/Dashboard/Card";
import PageTitle from "../components/common/PageTitle";
import { useProducts } from "../context/ProductContext";
import { useCategories } from "../context/CategoryContext";
import AlertLowStockCard from "../components/Dashboard/AlertLowStockCard";
import LowStockAlertsSection from "../components/Dashboard/LowStockAlertsSection";
import RecentProductCard from "../components/Dashboard/RecentProductCard";
import RecentProductsSection from "../components/Dashboard/RecentProductsSection";

const Dashboard = () => {
  const { products } = useProducts();
  const { categories } = useCategories();

  const lowStockItems = products.filter(
    (product) => product.stock < product.minStock
  );

  const infoCards = [
    {
      title: "Total Products",
      value: products.length.toString(),
      icon: BoxIcon,
      color: "bg-indigo-500",
    },
    {
      title: "Low Stock Items",
      value: lowStockItems.length.toString(),
      icon: TriangleAlert,
      color: "bg-red-500",
    },
    {
      title: "Categories",
      value: categories.length.toString(),
      icon: FolderTree,
      color: "bg-sky-500",
    },
    {
      title: "Total Value",
      value: `$${products
        .reduce((total, product) => total + product.price * product.stock, 0)
        .toFixed(2)}`,
      icon: DollarSign,
      color: "bg-emerald-500",
    },
  ];
  return (
    <div>
      {/* Page Title */}
      <PageTitle
        title="Dashboard"
        description="Overview of your stock management system"
      />

      {/* Info Cards Section */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {infoCards.map((info, index) => (
          <Card key={index} info={info} />
        ))}
      </div>

      {/* Low Stock Alerts Section */}
      <LowStockAlertsSection
        lowStockItems={lowStockItems.slice(0, 4)}
        categories={categories}
      />

      {/* Recent Products Section */}
      <RecentProductsSection products={products.slice(-5)} categories={categories} />
    </div>
  );
};

export default Dashboard;
