import React, { useState } from 'react';
import { BoxButton } from '../buttons/BoxButton';

type SignUpForm = {
  email: string;
  password: string;
  passwordConfirm: string;
};
const SignUp: React.FC = () => {
  const [signUpForm, setSignUpForm] = useState<SignUpForm>({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const goBack = () => {
    window.history.back();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('무야호');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="create-body">
      <h1 className="create-body-title">회원가입</h1>
      <form className="create-group-form" onSubmit={handleSubmit}>
        <div className="create-group-form-title">
          이메일
          <input
            className="create-group-form-title-input"
            type="text"
            name="email"
            placeholder="이메일"
            value={signUpForm.email}
            onChange={handleChange}
          />
        </div>
        <div className="create-group-form-title">
          비밀번호
          <input
            className="create-group-form-title-input"
            type="password"
            name="password"
            placeholder="패스워드"
            value={signUpForm.password}
            onChange={handleChange}
          />
        </div>
        <div className="create-group-form-title">
          비밀번호 확인
          <input
            className="create-group-form-title-input"
            type="password"
            name="passwordConfirm"
            placeholder="패스워드 확인"
            value={signUpForm.passwordConfirm}
            onChange={handleChange}
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

export default SignUp;
