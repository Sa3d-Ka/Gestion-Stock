import React, { useState } from "react";
import PageTitle from "../components/common/PageTitle";
import CategoryCard from "../components/Category/CategoryCard";
import { Plus } from "lucide-react";
import { useCategories } from "../context/CategoryContext";
import { useProducts } from "../context/ProductContext";
import AddCategoryDialog from "../components/Category/AddCategoryDialog";

const Categories = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false); // Dialog state

  const { categories, addCategory, deleteCategory } = useCategories();
  const { products } = useProducts();

  // Handle adding a new category
  const handleAddCategory = (categoryData) => {
    const newId =
      categories?.length > 0
        ? (
            Math.max(...categories.map((c) => parseInt(c.id.split("cat")[1]))) +
            1
          ).toString()
        : "cat1";

    addCategory({ ...categoryData, id: newId });
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <PageTitle
          title="Categories"
          description="Manage your product categories here"
        />

        {/* Add Category Dialog */}
        <AddCategoryDialog
          isOpen={isAddDialogOpen}
          onClose={() => setIsAddDialogOpen(false)}
          onSubmit={handleAddCategory}
        />

        <button
          onClick={() => setIsAddDialogOpen(true)}
          className="flex items-center gap-2 bg-linear-to-br from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer shadow-lg"
        >
          <Plus /> Add Category
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-7">
        {categories.map((categorie) => (
          <CategoryCard
            key={categorie.id}
            categorieInfo={categorie}
            products={products}
            onDelete={deleteCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
