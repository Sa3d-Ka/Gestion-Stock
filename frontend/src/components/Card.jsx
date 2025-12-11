import React from "react";

const Card = ({ info }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-500">{info.title}</p>
          <p className="text-3xl font-bold text-slate-900">{info.value}</p>
        </div>
        <div className={`p-3 ${info.color} rounded-xl`}>
          <info.icon className="text-white" size={30} />
        </div>
      </div>
    </div>
  );
};

export default Card;
