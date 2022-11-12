import { FC, ReactNode } from 'react';
import { Color } from '@theme/styled';
import { TagBackground, TagSize } from './styled';

type TagProps = {
  label: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  size?: TagSize;
  color?: Color;
};

const Tag: FC<TagProps> = ({ label, iconLeft, iconRight, ...props }) => {
  return (
    <TagBackground {...props}>
      {iconLeft && iconLeft}
      {label}
      {iconRight && iconRight}
    </TagBackground>
  );
};

export default Tag;
