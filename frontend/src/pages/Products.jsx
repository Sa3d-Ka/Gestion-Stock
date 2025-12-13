import React from "react";
import PageTitle from "../components/PageTitle";
import { useSuppliers } from "../context/SupplierContext";
import { useProducts } from "../context/ProductContext";
import { useCategories } from "../context/CategoryContext";
import { Pencil, Plus, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableEmpty,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/MyTable";

const Products = () => {
  const { suppliers } = useSuppliers();
  const { products, deleteProduct, addProduct } = useProducts();
  const { categories } = useCategories();

  const supplierName = (supplierId) => {
    const supplier = suppliers.find((sup) => sup.id === supplierId);
    return supplier ? supplier.name : "Unknown Supplier";
  };

  const categoryNamre = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Uncategorized";
  };

  const columns = [
    { key: "name", label: "Name" },
    { key: "sku", label: "SKU" },
    { key: "category", label: "Category" },
    { key: "supplier", label: "Supplier" },
    { key: "quantity", label: "Quantity" },
    { key: "price", label: "Price" },
    { key: "actions", label: "Actions" },
  ];
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
              {products.length} products in total
            </p>
          </div>

          <button className="px-4 py-2 flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 text-sm text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 cursor-pointer shadow-lg">
            <Plus size={20} /> Add Product
          </button>
        </div>

        <div className="grid grid-cols-12 gap-4 mb-4">
          {/* Filters - Placeholder for future filter components */}
          <input type="text" className="col-span-6 border-2 border-gray-300 rounded-md px-4 py-2 outline-0 focus:border-blue-500" placeholder="Search products..." />
          <select className="col-span-3 border border-gray-300 rounded-md px-4 py-2 outline-0 focus:border-blue-500">
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <select className="col-span-3 border border-gray-300 rounded-md px-4 py-2 outline-0 focus:border-blue-500">
            <option value="">All Suppliers</option>
            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableHeader>

          <TableBody>
            {products.length === 0 ? (
              <TableEmpty
                message="No products available. Add your first product to get started."
                colSpan={columns.length}
              />
            ) : (
              products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium text-gray-800">
                    {product.name}
                  </TableCell>

                  <TableCell>{product.sku}</TableCell>

                  <TableCell className="text-gray-700">
                    {supplierName(product.supplierId)}
                  </TableCell>

                  <TableCell>
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-md">
                      {categoryNamre(product.categoryId)}
                    </span>
                  </TableCell>

                  <TableCell>
                    {product.stock === 0 ? (
                      <span className="text-sm font-medium px-2 py-1 bg-red-100 text-red-700 rounded-md">
                        Out of Stock
                      </span>
                    ) : product.stock < product.minStock ? (
                      <span className="text-sm font-medium px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md">
                        {product.stock} (Low)
                      </span>
                    ) : (
                      product.stock
                    )}
                  </TableCell>

                  <TableCell>${product.price.toFixed(2)}</TableCell>

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
