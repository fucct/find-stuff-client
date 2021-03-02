import React from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { TokenState } from './MemberState';

const Login: React.FC<RouteComponentProps> = (props) => {
  console.log(props);
  const userToken: string = useRecoilValue(TokenState);

  return <div>{props}</div>;
};

export default Login;
