// pages/Suppliers.jsx
import React from "react";
import PageTitle from "../components/common/PageTitle";
import { useSuppliers } from "../context/SupplierContext";
import { useProducts } from "../context/ProductContext";
import { Pencil, Plus, Trash } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableEmpty
} from "../components/common/MyTable";

const Suppliers = () => {
  const { suppliers, deleteSupplier } = useSuppliers();
  const { products } = useProducts();

  const productCount = (supplierId) => {
    return products.filter((product) => product.supplierId === supplierId).length;
  };

  const columns = [
    { key: "name", label: "Name" },
    { key: "contact", label: "Contact" },
    { key: "address", label: "Address" },
    { key: "products", label: "Products" },
    { key: "actions", label: "Actions" },
  ];

  return (
    <div>
      <PageTitle
        title="Suppliers"
        description="Manage your product suppliers"
      />

      <div className="p-6 border border-gray-200 shadow-lg rounded-2xl mt-6 bg-white space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-lg text-gray-800">All Suppliers</p>
            <p className="text-gray-500 text-sm">
              {suppliers.length} suppliers in total
            </p>
          </div>

          <button className="px-4 py-2 flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 text-sm text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 cursor-pointer shadow-lg">
            <Plus size={20} /> Add Supplier
          </button>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            {columns.map((column) => (
              <TableHead key={column.key}>
                {column.label}
              </TableHead>
            ))}
          </TableHeader>
          
          <TableBody>
            {suppliers.length === 0 ? (
              <TableEmpty 
                message="No suppliers available. Add your first supplier to get started."
                colSpan={columns.length}
              />
            ) : (
              suppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell className="font-medium text-gray-800">
                    {supplier.name}
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex flex-col text-gray-500 text-sm">
                      <p>{supplier.email}</p>
                      <p>{supplier.phone}</p>
                    </div>
                  </TableCell>
                  
                  <TableCell className="text-gray-700">
                    {supplier.address}
                  </TableCell>
                  
                  <TableCell>
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-md">
                      {productCount(supplier.id)} product(s)
                    </span>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex gap-1">
                      <button 
                        onClick={() => console.log(`Edit supplier ${supplier.id}`)}
                        className="text-sky-600 p-2 rounded-md hover:bg-gray-100 transition duration-200 cursor-pointer"
                      >
                        <Pencil size={18} />
                      </button>
                      <button 
                        onClick={() => confirm("Are you sure you want to delete this supplier?") && deleteSupplier(supplier.id)}
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

export default Suppliers;