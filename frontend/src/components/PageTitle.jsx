import React from "react";

const PageTitle = ({ title, description }) => {
  return (
    <div className="mb-7">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default PageTitle;
