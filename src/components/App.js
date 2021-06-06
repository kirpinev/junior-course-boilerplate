import React from 'react';
import { Container, List, Title } from './general';
import products from '../products.json';

const firstThreeProducts = products.slice(0, 3);

export const App = () => (
  <Container>
    <Title text="Список товаров" />
    <List>
      {firstThreeProducts.map(item => (
        <List.Item key={item.id}>{item.name}</List.Item>
      ))}
    </List>
  </Container>
);
