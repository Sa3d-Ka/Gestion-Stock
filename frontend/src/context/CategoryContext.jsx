// CategoryContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import defaultCategories from "../data/defaultCategories.json";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  // Load data on first render
  useEffect(() => {
    const storedCategories = localStorage.getItem("categories");

    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    } else {
      // Use default data if nothing in localStorage
      setCategories(defaultCategories);
      localStorage.setItem("categories", JSON.stringify(defaultCategories));
    }
  }, []);

  // Save to localStorage whenever categories change
  useEffect(() => {
    if (categories.length > 0) {
      localStorage.setItem("categories", JSON.stringify(categories));
    }
  }, [categories]);

  // Add category function
  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  // Delete category function
  const deleteCategory = (categoryId) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== categoryId
    );
    setCategories(updatedCategories);
  };

  return (
    <CategoryContext.Provider value={{ categories, addCategory, deleteCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => useContext(CategoryContext);