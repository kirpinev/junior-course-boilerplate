import React, { useMemo } from 'react';
import { ProductsList } from '../../components';
import { Container, Title } from '../../uikit';
import products from '../../products.json';

export const MainPage = () => {
  const firstThreeProducts = useMemo(() => products.slice(0, 3), []);

  return (
    <Container>
      <Title text="Список товаров" />
      <ProductsList products={firstThreeProducts} />
    </Container>
  );
};
