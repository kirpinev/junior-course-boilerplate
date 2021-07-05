import React, { Component } from 'react';
import { formatMoney } from 'csssr-school-utils';
import ProductCard from 'csssr-school-product-card';
import { List } from '../../uikit';
import { Icons } from '../../Icons';
import { withLogRender } from '../../hocs';
import { ProductsContext } from '../../context';

const ProductCardWithLogger = withLogRender(ProductCard);

export class ProductsList extends Component {
  render() {
    return (
      <ProductsContext.Consumer>
        {({ products }) => (
          <List>
            {products.map(item => (
              <List.Item key={item.id}>
                <ProductCardWithLogger
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
            ))}
          </List>
        )}
      </ProductsContext.Consumer>
    );
  }
}
