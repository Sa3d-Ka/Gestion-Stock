import React from "react";
import PageTitle from "../components/common/PageTitle";
import CategoryCard from "../components/Category/CategoryCard";
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

        <button className="flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer shadow-lg">
          <Plus /> Add Category
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-7">
        {categories.map((categorie) => (
          <CategoryCard key={categorie.id} categorieInfo={categorie} products={products} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
