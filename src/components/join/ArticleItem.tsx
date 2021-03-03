import React from 'react';

type ArticleProps = {
  _id: string;
  title: string;
  contents: string;
};

const ArticleItem: React.FC<ArticleProps> = ({ _id, title, contents }) => {
  return (
    <div>
      제목 : {title}, 내용 : {contents}
    </div>
  );
};

export default ArticleItem;
