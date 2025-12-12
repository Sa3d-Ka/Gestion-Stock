import { Box } from "lucide-react";
import React from "react";

const AlertLowStockCard = ({ product, categorieName }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-rose-50 border border-rose-100">
      <div className="flex items-center gap-4">
        <div className="h-13 w-13 rounded-lg bg-rose-200 flex items-center justify-center">
          <Box size={28} className="text-rose-600" />
        </div>
        <div>
          <p className="font-semibold text-lg">{product.name}</p>
          <p className="text-sm text-gray-500">{categorieName}</p>
        </div>
      </div>
      <div>
        <span className="rounded-md border px-2.5 py-0.5 text-white text-xs font-semibold border-transparent text-destructive-foreground shadow bg-rose-500">
          {product.stock} / {product.minStock} min
        </span>
      </div>
    </div>
  );
};

export default AlertLowStockCard;
