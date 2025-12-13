import React from "react";
import { useNavigate } from "react-router-dom";
import AlertLowStockCard from "./AlertLowStockCard";
import { AlertTriangle } from "lucide-react";

const LowStockAlertsSection = ({ lowStockItems, categories }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-6 shadow p-5 rounded-xl bg-white space-y-5">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-lg flex gap-3 items-center">
          <AlertTriangle className="text-red-600" /> Low Stock Alerts
        </h4>
        <span
          onClick={() => navigate("/products")}
          className="text-blue-600 cursor-pointer hover:scale-105 transition duration-200"
        >
          View all
        </span>
      </div>
      <div className="space-y-2">
        {lowStockItems.length === 0 ? (
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
  );
};

export default LowStockAlertsSection;
