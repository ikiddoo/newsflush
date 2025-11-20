import React from "react";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import NewsContent from "../components/Content/NewsContent";


const FAQ: React.FC = () => (
  <div>
    <BreadCrumb items={[{ label: "Home", path: "/" }, { label: "FAQ", path: "/faq" }]} />
    <NewsContent
      title="FAQ"
      description="Frequently Asked Questions"
    />
  </div>
);

export default FAQ;
