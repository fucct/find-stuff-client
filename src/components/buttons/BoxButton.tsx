import React from 'react';
import styled, { css } from 'styled-components';

type MenuItemProps = {
  links: string;
  name: string;
  width?: string;
  height?: string;
  color?: boolean;
  onClick?: any;
};

export const BoxButton: React.FC<MenuItemProps> = ({
  links,
  name,
  width,
  height,
  color,
  onClick,
}) => {
  const Button = styled.button`
    cursor: pointer;
    font-size: 14px;
    width: 100px;
    height: 42px;
    ${width &&
    css`
      width: ${width};
    `}
    ${height &&
    css`
      width: ${height};
    `}
    padding: 5px;
    margin: 5px;
    color: black;
    background-color: white;
    border: solid 2px rgb(217, 226, 239);
    border-radius: 4px;
    ${color &&
    css`
      color: white;
      background: #00c471;
      border: 2px solid #00c471;
    `};
  `;

  return (
    <a className="box-button" href={links} onClick={onClick}>
      <Button>{name}</Button>
    </a>
  );
};
