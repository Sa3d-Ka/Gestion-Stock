import React from "react";
import PageTitle from "../components/PageTitle";
import { BoxIcon, FolderTree } from "lucide-react";

const Categories = () => {
  return (
    <div>
      <PageTitle
        title="Categories"
        description="Manage your product categories here"
      />

      <div className="grid grid-cols-4 gap-3 mt-7">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-t-6 border-t-indigo-500 border-slate-100 transition-all hover:shadow-md">
          <div>
            <div className="bg-indigo-100 p-3 rounded-xl inline-block mb-4">
              <FolderTree size={27} className="text-indigo-500" />
            </div>
          </div>
          <div className="">
            <p className="font-semibold text-lg text-slate-900 mb-1">
              Electronics
            </p>
            <p className="text-sm text-slate-500 line-clamp-2 mb-4">
              Electronic devices and accessories
            </p>
          </div>
          <hr className="w-full text-gray-200" />
          <div className="mt-4">
            <div className="flex items-center gap-1.5">
              <BoxIcon size={20} className="text-gray-400 inline-block mr-2" />
              <span className="text-sm text-gray-600">5 Products</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
