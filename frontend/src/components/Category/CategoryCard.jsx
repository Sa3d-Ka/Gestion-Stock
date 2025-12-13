import React from "react";
import { BoxIcon, FolderTree, Pencil, Trash } from "lucide-react";

const CategoryCard = ({ categorieInfo, products }) => {

  const productCount = products.filter(
    (product) => product.categoryId === categorieInfo.id
  ).length;

  // Map color names to complete Tailwind classes
  const colorMap = {
    indigo: {
      border: "border-t-indigo-500",
      bg: "bg-indigo-100",
      text: "text-indigo-500",
    },
    rose: {
      border: "border-t-rose-500",
      bg: "bg-rose-100",
      text: "text-rose-500",
    },
    emerald: {
      border: "border-t-emerald-500",
      bg: "bg-emerald-100",
      text: "text-emerald-500",
    },
    amber: {
      border: "border-t-amber-500",
      bg: "bg-amber-100",
      text: "text-amber-500",
    },
    sky: {
      border: "border-t-sky-500",
      bg: "bg-sky-100",
      text: "text-sky-500",
    },
    teal: {
      border: "border-t-teal-500",
      bg: "bg-teal-100",
      text: "text-teal-500",
    },
    orange: {
      border: "border-t-orange-500",
      bg: "bg-orange-100",
      text: "text-orange-500",
    },
  };

  const colorClasses = colorMap[categorieInfo.color] || colorMap.indigo;

  return (
    <div
      className={`group rounded-2xl bg-white p-6 shadow-sm border border-t-8 ${colorClasses.border} border-slate-100 transition-all hover:shadow-md`}
    >
      <div className="flex items-start justify-between">
        <div className={`${colorClasses.bg} p-3 rounded-xl inline-block mb-4`}>
          <FolderTree size={27} className={colorClasses.text} />
        </div>

        <div className="space-x-2 opacity-0 group-hover:opacity-100 transition duration-200">
          <button className="text-gray-400 p-2 rounded-md hover:bg-gray-100 hover:text-sky-600 transition duration-200 cursor-pointer">
            <Pencil size={18} />
          </button>
          <button className="text-gray-400 p-2 rounded-md hover:bg-gray-100 hover:text-red-600 transition duration-200 cursor-pointer">
            <Trash size={18} />
          </button>
        </div>
      </div>

      <p className="font-semibold text-lg text-slate-900 mb-1">
        {categorieInfo.name}
      </p>
      <p className="text-sm text-slate-500 line-clamp-2 mb-4">
        {categorieInfo.description}
      </p>

      <hr className="w-full text-gray-200" />

      <div className="mt-4 flex items-center gap-1.5">
        <BoxIcon size={20} className="text-gray-400" />
        <span className="text-sm text-gray-600">
          {productCount} Product(s)
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;