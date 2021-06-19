import React, { memo } from 'react';
import ProductCard from 'csssr-school-product-card';
import { formatMoney } from 'csssr-school-utils';
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
            price={formatMoney(item.price, 0)}
            subPriceContent={item.subPriceContent}
            maxRating={5}
            rating={item.rating}
            ratingComponent={Icons.Star}
          />
        </List.Item>
      ))
    ) : (
      <List.Item>Товаров не найдено :(</List.Item>
    )}
  </List>
));
