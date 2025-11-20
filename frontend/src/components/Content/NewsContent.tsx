import React from "react";
import "./NewsContent.css";

interface NewsContentProps {
  title: string;
  description: string;
}

const NewsContent: React.FC<NewsContentProps> = ({ title, description }) => (
  <div className="news-content-container">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);

export default NewsContent;
