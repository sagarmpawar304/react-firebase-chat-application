import React, { FC, memo } from 'react';
import Title from './index.styles';

interface Props {
  title: string;
  level?: number;
  className?: string;
}

const T: FC<Props> = ({ title = 'Title', level = 1, className = '' }) => {
  if (level === 2) {
    return (
      <Title className={className} level={2}>
        {title}
      </Title>
    );
  }
  if (level === 3) {
    return (
      <Title className={className} level={3}>
        {title}
      </Title>
    );
  }
  if (level === 4) {
    return (
      <Title className={className} level={4}>
        {title}
      </Title>
    );
  }
  if (level === 5) {
    return (
      <Title className={className} level={5}>
        {title}
      </Title>
    );
  }

  return (
    <Title className={className} level={1}>
      {title}
    </Title>
  );
};

export default memo(T);
