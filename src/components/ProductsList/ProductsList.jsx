import React from 'react';
import { List } from '../../uikit';

export const ProductsList = ({ products }) => (
  <List>
    {products.map(item => (
      <List.Item key={item.id}>{item.name}</List.Item>
    ))}
  </List>
);
