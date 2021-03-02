import React from 'react';

type MenuItemProps = {
  links: string;
  name: string;
};
export const HeaderMenuItem: React.FC<MenuItemProps> = ({ links, name }) => {
  return (
    <a className="Home-header-button" href={links}>
      <div className="Home-header-button-text">{name}</div>
    </a>
  );
};
