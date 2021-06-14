import React from 'react';
import ProductCard from 'csssr-school-product-card';
import { Icons } from '../../Icons';
import { List } from '../../uikit';

export const ProductsList = ({ products = [] }) => {
  if (products.length === 0) {
    return <p>Список товаров пуст</p>;
  }

  return (
    <List>
      {products.map(item => (
        <List.Item key={item.id}>
          <ProductCard
            isInStock={item.isInStock}
            img={item.img}
            title={item.title}
            price={item.price}
            subPriceContent={item.subPriceContent}
            maxRating={5}
            rating={item.rating}
            ratingComponent={Icons.Star}
          />
        </List.Item>
      ))}
    </List>
  );
};
