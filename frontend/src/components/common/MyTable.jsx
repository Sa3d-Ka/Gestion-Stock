// components/Table/Table.jsx
import React from "react";

export const Table = ({ children, className = "" }) => {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className={`w-full ${className}`}>
          {children}
        </table>
      </div>
    </div>
  );
};

export const TableHeader = ({ children, className = "" }) => {
  return (
    <thead className={`bg-gray-100 ${className}`}>
      <tr>{children}</tr>
    </thead>
  );
};

export const TableBody = ({ children, className = "" }) => {
  return (
    <tbody className={`bg-white divide-y divide-gray-200 ${className}`}>
      {children}
    </tbody>
  );
};

export const TableRow = ({ children, className = "", hover = true, onClick }) => {
  return (
    <tr 
      className={`
        ${hover ? "hover:bg-gray-50 transition-colors" : ""} 
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </tr>
  );
};

export const TableHead = ({ children, className = "", sortable, onSort, sortDirection }) => {
  return (
    <th 
      className={`
        px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wide
        ${sortable ? "cursor-pointer hover:bg-gray-200 transition-colors" : ""}
        ${className}
      `}
      onClick={onSort}
    >
      <div className="flex items-center gap-1">
        {children}
        {sortable && sortDirection && (
          <span>{sortDirection === "asc" ? "↑" : "↓"}</span>
        )}
      </div>
    </th>
  );
};

export const TableCell = ({ children, className = "", colSpan }) => {
  return (
    <td 
      className={`px-6 py-4 ${className}`}
      colSpan={colSpan}
    >
      {children}
    </td>
  );
};

export const TableEmpty = ({ message, colSpan = 1, className = "" }) => {
  return (
    <TableRow>
      <TableCell 
        colSpan={colSpan} 
        className={`text-center text-gray-500 py-12 ${className}`}
      >
        {message}
      </TableCell>
    </TableRow>
  );
};