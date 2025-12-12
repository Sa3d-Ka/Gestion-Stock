// SupplierContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import defaultSuppliers from "../data/defaultSuppliers.json";

const SupplierContext = createContext();

export const SupplierProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);

  // Load data on first render
  useEffect(() => {
    const storedSuppliers = localStorage.getItem("suppliers");
    if (storedSuppliers) {
      setSuppliers(JSON.parse(storedSuppliers));
    } else {
      // Use default data if nothing in localStorage
      setSuppliers(defaultSuppliers);
      localStorage.setItem("suppliers", JSON.stringify(defaultSuppliers));
    }
  }, []);

  // Save to localStorage whenever suppliers change
  useEffect(() => {
    if (suppliers.length > 0) {
      localStorage.setItem("suppliers", JSON.stringify(suppliers));
    }
  }, [suppliers]);

  // Add supplier function
  const addSupplier = (newSupplier) => {
    setSuppliers([...suppliers, newSupplier]);
  };

  // Delete supplier function
  const deleteSupplier = (supplierId) => {
    const updatedSuppliers = suppliers.filter(
      (supplier) => supplier.id !== supplierId
    );
    setSuppliers(updatedSuppliers);
  };

  return (
    <SupplierContext.Provider value={{ suppliers, addSupplier, deleteSupplier }}>
      {children}
    </SupplierContext.Provider>
  );
};

export const useSuppliers = () => useContext(SupplierContext);