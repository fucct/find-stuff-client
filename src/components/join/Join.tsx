import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleItem from './ArticleItem';
import './Join.css';

export type ArticleProps = {
  id: string;
  title: string;
  contents: string;
};

const Join: React.FC = () => {
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
    <div className="join-group-board">
      <table className="join-group-board-types">
        <th className="join-group-board-type title-type">제목</th>
        <th className="join-group-board-type author-type">작성자</th>
        <th className="join-group-board-type create-date-type">게시일</th>
        {articles.map((article) => (
          <ArticleItem
            key={article.id}
            id={article.id}
            title={article.title}
            contents={article.contents}
          />
        ))}
      </table>
    </div>
  );
};

export default Join;
