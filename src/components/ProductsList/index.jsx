import React, { memo } from 'react';
import ProductCard from 'csssr-school-product-card';
import { List } from '../../uikit';
import { Icons } from '../../Icons';

export const ProductsList = memo(({ products }) => (
  <List>
    {products.length !== 0 ? (
      products.map(item => (
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
      ))
    ) : (
      <p>Товаров не найдено :(</p>
    )}
  </List>
));
