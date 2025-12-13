import React from "react";
import {
  AlertTriangle,
  BoxIcon,
  DollarSign,
  FolderTree,
  TriangleAlert,
} from "lucide-react";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import { useProducts } from "../context/ProductContext";
import { useCategories } from "../context/CategoryContext";
import AlertLowStockCard from "../components/AlertLowStockCard";

const Home = () => {
  const { products } = useProducts();
  const { categories } = useCategories();

  const countLowStockItems = products.filter(
    (product) => product.stock < product.minStock
  ).length;

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
      value: countLowStockItems.toString(),
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
      <PageTitle
        title="Dashboard"
        description="Overview of your stock management system"
      />
      <div className="grid grid-cols-4 gap-4 mt-6">
        {infoCards.map((info, index) => (
          <Card key={index} info={info} />
        ))}
      </div>
      <div className="mt-6 shadow p-5 rounded-xl bg-white space-y-5">
        <h4 className="font-semibold text-lg flex gap-3 items-center">
          <AlertTriangle className="text-red-600" /> Low Stock Alerts
        </h4>
        <div className="space-y-2">
          {countLowStockItems === 0 ? (
            <p className="text-gray-500 mt-4">
              All products are sufficiently stocked.
            </p>
          ) : (
            lowStockItems.map((product) => (
              <AlertLowStockCard
                key={product.id}
                product={product}
                categorieName={
                  categories.find((cat) => cat.id === product.categoryId)?.name
                }
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
