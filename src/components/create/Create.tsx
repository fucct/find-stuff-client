import React, { useState } from 'react';
import './Create.css';
import axios from 'axios';
import { BoxButton } from '../buttons/BoxButton';

type MyFormProps = {
  onSubmit: (form: { title: string; contents: string }) => void;
};

const Create: React.FC = () => {
  const [form, setForm] = useState({
    title: '',
    contents: '',
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    setForm({ title: '', contents: '' });
    window.location.href = '/join';
  };

  const goBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.back();
  };

  return (
    <div className="create-body">
      <h1 className="create-body-title">모집하기</h1>
      <form className="create-group-form" onSubmit={handleSubmit}>
        <div className="create-group-form-title">
          제목
          <input
            className="create-group-form-title-input"
            type="text"
            name="title"
            placeholder="제목을 입력해주세요"
            value={form.title}
            onChange={onInputChange}
          />
        </div>
        <div className="create-group-form-contents">
          본문
          <textarea
            className="create-group-form-contents-input"
            name="contents"
            placeholder="내용을 입력해주세요"
            value={form.contents}
            onChange={onTextareaChange}
          />
        </div>
        <div className="create-group-form-buttons">
          <BoxButton links="/" name="이전" onClick={goBack} />
          <BoxButton links="/" name="제출" color onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Create;
