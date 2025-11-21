
import React from "react";
import "./NewsContent.css";

export interface NewsArticle {
  title: string;
  url: string;
}

interface NewsContentProps {
  title: string;
  description?: string;
  articles?: NewsArticle[];
}

const NewsContent: React.FC<NewsContentProps> = ({ title, description, articles }) => (
  <div className="news-content-container">
    <h1>{title}</h1>
    {description && <p>{description}</p>}
    {articles && articles.length > 0 && (
      <ul>
        {articles.map((article, idx) => (
          <li key={idx}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default NewsContent;
