import React, { useState } from "react";
import PageTitle from "../components/common/PageTitle";
import { useSuppliers } from "../context/SupplierContext";
import { useProducts } from "../context/ProductContext";
import { useCategories } from "../context/CategoryContext";
import { Pencil, Plus, Trash, Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/common/MyTable";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSupplier, setSelectedSupplier] = useState("");

  const { suppliers } = useSuppliers();
  const { products, deleteProduct } = useProducts();
  const { categories } = useCategories();

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory
      ? product.categoryId === selectedCategory
      : true;

    const matchesSupplier = selectedSupplier
      ? product.supplierId === selectedSupplier
      : true;

    return matchesSearch && matchesCategory && matchesSupplier;
  });

  const supplierName = (supplierId) => {
    const supplier = suppliers.find((sup) => sup.id === supplierId);
    return supplier ? supplier.name : "Unknown Supplier";
  };

  const categoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Uncategorized";
  };

  const columns = [
    { key: "name", label: "Name" },
    { key: "sku", label: "SKU" },
    { key: "supplier", label: "Supplier" },
    { key: "category", label: "Category" },
    { key: "quantity", label: "Quantity" },
    { key: "price", label: "Price" },
    { key: "actions", label: "Actions" },
  ];

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedSupplier("");
  };

  return (
    <div>
      <PageTitle
        title="Products"
        description="Manage your inventory products"
      />

      <div className="p-6 border border-gray-200 shadow-lg rounded-2xl mt-6 bg-white space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-lg text-gray-800">All Products</p>
            <p className="text-gray-500 text-sm">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={resetFilters} className="px-4 py-1.5 outline-0 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer">Reset</button>
            <button className="px-4 py-2 flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 text-sm text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 cursor-pointer shadow-lg">
              <Plus size={20} /> Add Product
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-12 gap-4 mb-4">
          {/* Search Input - 6 columns */}
          <div className="col-span-12 md:col-span-6">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or SKU..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter - 3 columns */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Supplier Filter - 3 columns */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <select
              value={selectedSupplier}
              onChange={(e) => setSelectedSupplier(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Suppliers</option>
              {suppliers.map((supplier) => (
                <option key={supplier.id} value={supplier.id}>
                  {supplier.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableHeader>

          <TableBody>
            {filteredProducts.length === 0 ? (
              <TableEmpty
                message={
                  products.length === 0
                    ? "No products available. Add your first product to get started."
                    : "No products match your filters. Try adjusting your search criteria."
                }
                colSpan={columns.length}
              />
            ) : (
              filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium text-gray-800">
                    {product.name}
                  </TableCell>

                  <TableCell>
                    <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                      {product.sku}
                    </span>
                  </TableCell>

                  <TableCell className="text-gray-700">
                    {supplierName(product.supplierId)}
                  </TableCell>

                  <TableCell>
                    <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-700 rounded-md">
                      {categoryName(product.categoryId)}
                    </span>
                  </TableCell>

                  <TableCell>
                    {product.stock === 0 ? (
                      <span className="text-xs font-medium px-2 py-1 bg-red-100 text-red-700 rounded-md">
                        Out of Stock
                      </span>
                    ) : product.stock < 10 ? (
                      <span className="text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md">
                        {product.stock} (Low)
                      </span>
                    ) : (
                      <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-md">
                        {product.stock}
                      </span>
                    )}
                  </TableCell>

                  <TableCell className="font-medium">
                    ${product.price.toFixed(2)}
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-1">
                      <button
                        onClick={() =>
                          console.log(`Edit product ${product.id}`)
                        }
                        className="text-sky-600 p-2 rounded-md hover:bg-gray-100 transition duration-200 cursor-pointer"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() =>
                          confirm(
                            "Are you sure you want to delete this product?"
                          ) && deleteProduct(product.id)
                        }
                        className="text-red-600 p-2 rounded-md hover:bg-gray-100 transition duration-200 cursor-pointer"
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Products;
