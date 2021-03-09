import React, { memo } from 'react';

import Card from './CategoryCard.styles';

const CategoryCard = () => {
  return (
    <Card
      hoverable
      cover={<img src='/images/img (35).jpg' alt='sarah' />}
      size='small'
    >
      <Card.Meta title='Sarah Genova' description='sexy model with big boobs' />
    </Card>
  );
};

export default memo(CategoryCard);
