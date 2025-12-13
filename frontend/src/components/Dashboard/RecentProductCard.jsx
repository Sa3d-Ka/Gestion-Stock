import { Box } from "lucide-react";
import React from "react";

const RecentProductCard = ({ product, categorieName }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-100">
      <div className="flex items-center gap-4">
        <div className="h-13 w-13 rounded-lg bg-blue-200 flex items-center justify-center">
          <Box size={28} className="text-blue-600" />
        </div>
        <div>
          <p className="font-semibold text-lg">{product.name}</p>
          <p className="text-sm text-gray-500">{categorieName}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <span className="font-semibold text-destructive-foreground text-lg">
          $ {product.price}
        </span>
        <span className="text-sm text-gray-500">
            {`Stock: ${product.stock}`}
        </span>
      </div>
    </div>
  );
};

export default RecentProductCard;
