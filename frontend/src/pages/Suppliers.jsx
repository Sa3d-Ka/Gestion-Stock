import React from "react";
import PageTitle from "../components/PageTitle";
import { useSuppliers } from "../context/SupplierContext";
import { useProducts } from "../context/ProductContext";

const Suppliers = () => {
  const { suppliers } = useSuppliers();
  const { products } = useProducts();

  const productCount = (supplierId) => {
    return products.filter((product) => product.supplierId === supplierId)
      .length;
  };

  return (
    <div>
      <PageTitle
        title="Suppliers"
        description="Manage your product suppliers"
      />

      <div className="p-6 border border-gray-200 shadow-lg rounded-2xl mt-6 bg-white space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-lg text-gray-800">All Suppliers</p>
            <p className="text-gray-500 text-sm">
              {suppliers.length} suppliers in total
            </p>
          </div>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm shadow hover:bg-blue-700 transition">
            + Add Supplier
          </button>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Head */}
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Products
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-white divide-y divide-gray-200">
                {suppliers.map((supplier) => (
                  <tr key={supplier.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {supplier.name}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex flex-col text-gray-500 text-sm">
                        <p>{supplier.email}</p>
                        <p>{supplier.phone}</p>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-700">
                      {supplier.address}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {productCount(supplier.id)}
                    </td>

                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition hover:underline">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
