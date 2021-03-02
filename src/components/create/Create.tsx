import React, { useState } from 'react';
import HomeHeader from '../home/HomeHeader';
import './Create.css';
import axios from 'axios';

type MyFormProps = {
  onSubmit: (form: { title: string; contents: string }) => void;
};

const Create: React.FC = () => {
  const [form, setForm] = useState({
    title: '',
    contents: '',
  });
  const { title, contents } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    // 여기도 모르니까 any 로 하겠습니다.
    e.preventDefault();
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:8080/api/articles',
      data: {
        title: form.title,
        contents: form.contents,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
  };

  return (
    <div className="Create">
      <div className="create-body">
        <h1 className="create-body-title">모집하기</h1>
        <form className="create-group-form" onSubmit={handleSubmit}>
          <div className="create-group-form-title">
            제목:
            <input
              className="create-group-form-title-input"
              type="text"
              name="title"
              placeholder="제목을 입력해주세요"
              onChange={onChange}
            />
          </div>
          <div className="create-group-form-contents">
            본문:
            <input
              className="create-group-form-contents-input"
              type="text"
              name="contents"
              placeholder="내용을 입력해주세요"
              onChange={onChange}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Create;
