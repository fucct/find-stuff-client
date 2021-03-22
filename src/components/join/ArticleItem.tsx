import React from 'react';
import './Join.css';
import axios from 'axios';

type ArticleProps = {
  id: string;
  title: string;
  contents: string;
};

const ArticleItem: React.FC<ArticleProps> = ({ id, title, contents }) => {
  const onClickArticle = (event: React.MouseEvent<HTMLTableRowElement>) => {
    window.location.href = `/articles/${id}`;
  };

  return (
    <tr className="article-item" onClick={onClickArticle}>
      <td className="article-item title">{title}</td>
      <td className="article-item author">디디</td>
      <td className="article-item create-date">2021-03-04</td>
    </tr>
  );
};

export default ArticleItem;
