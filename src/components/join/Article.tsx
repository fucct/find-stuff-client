import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ArticleProps } from './Join';

const Article = () => {
  const { id } = useParams<any>();
  const [article, setArticle] = useState<ArticleProps>({
    id: '',
    title: '',
    contents: '',
  });

  useEffect(() => {
    const retrieveArticle = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/articles/${id}`,
      );
      setArticle(response.data);
    };
    retrieveArticle();
  }, []);

  return (
    <div>
      <div>{article.title}</div>
      <div>{article.contents}</div>
    </div>
  );
};

export default Article;
