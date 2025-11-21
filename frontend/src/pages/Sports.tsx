
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getNewsApiUrl } from "../api/newsApi";
import BreadCrumb from "../components/BreadCrumb/BreadCrumb";
import NewsContent from "../components/Content/NewsContent";
import type { NewsArticle } from "../components/Content/NewsContent";

const Sports: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    axios.get(getNewsApiUrl("sports"))
      .then(res => {
        if (res.data && res.data.articles) {
          setArticles(
            res.data.articles.map((a: any) => ({
              title: a.title,
              url: a.url
            }))
          );
        }
      })
      .catch(() => setArticles([]));
  }, []);

  return (
    <div>
      <BreadCrumb items={[{ label: "Home", path: "/" }, { label: "Sports", path: "/sports" }]} />
      <NewsContent
        title="Sports"
        description="Latest sports news and updates."
        articles={articles}
      />
    </div>
  );
};

export default Sports;
