import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TokenState } from './MemberState';

const Sample = () => {
  const userToken = useRecoilValue(TokenState);

  return <div>하이 ㅋㅋ</div>;
};

export default Sample;
