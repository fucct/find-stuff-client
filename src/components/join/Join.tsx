import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleItem from './ArticleItem';

type ArticleProps = {
  _id: string;
  title: string;
  contents: string;
};

export const Join: React.FC = () => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios({
        method: 'GET',
        url: 'http://localhost:8080/api/articles',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setArticles(response.data);
    };
    getArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <ArticleItem
          key={article._id}
          _id={article._id}
          title={article.title}
          contents={article.contents}
        />
      ))}
    </div>
  );
};
