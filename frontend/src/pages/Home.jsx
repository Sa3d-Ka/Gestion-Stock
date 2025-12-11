import { BoxIcon, FolderTree, TriangleAlert } from "lucide-react";
import React from "react";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";

const Home = () => {
  const infoCards = [
    {
      title: "Total Products",
      value: "1,250",
      icon: BoxIcon,
      color: "bg-indigo-500",
    },
    {
      title: "Low Stock Items",
      value: "3",
      icon: TriangleAlert,
      color: "bg-red-500",
    },
    {
      title: "Categories",
      value: "5",
      icon: FolderTree,
      color: "bg-emerald-500",
    },
  ];
  return (
    <div>
      <PageTitle title="Dashboard" description="Overview of your stock management system" />
      <div className="grid grid-cols-3 gap-4 mt-6">
        {infoCards.map((info, index) => (
          <Card key={index} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Home;
