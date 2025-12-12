import React from "react";
import PageTitle from "../components/PageTitle";
import CategorieCard from "../components/CategorieCard";
import { Plus } from "lucide-react";
import { useCategories } from "../context/CategoryContext";
import { useProducts } from "../context/ProductContext";

const Categories = () => {
  const { categories } = useCategories();
  const { products } = useProducts();

  return (
    <div>
      <div className="flex items-center justify-between">
        <PageTitle
          title="Categories"
          description="Manage your product categories here"
        />

        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          <Plus /> Add Category
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-7">
        {categories.map((categorie) => (
          <CategorieCard key={categorie.id} categorieInfo={categorie} products={products} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
