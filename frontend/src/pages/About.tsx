import React from "react";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import NewsContent from "../components/Content/NewsContent";


const About: React.FC = () => (
  <div>
    <BreadCrumb items={[{ label: "Home", path: "/" }, { label: "About", path: "/about" }]} />
    <NewsContent
      title="About"
      description="About Newsflush: Your source for the latest news."
    />
  </div>
);

export default About;
