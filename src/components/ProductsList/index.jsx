import React, { Component } from 'react';
import { formatMoney } from 'csssr-school-utils';
import ProductCard from 'csssr-school-product-card';
import { LogRender } from '../LogRender';
import { List } from '../../uikit';
import { Icons } from '../../Icons';

export class ProductsList extends Component {
  render() {
    if (this.props.products.length === 0) {
      return (
        <>
          <LogRender {...this.props} {...this.state} componentContext={this} />
          <List>
            <List.Item>Товаров не найдено :(</List.Item>
          </List>
        </>
      );
    }

    return (
      <>
        <LogRender {...this.props} {...this.state} componentContext={this} />
        <List>
          {this.props.products.map(item => (
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
          ))}
        </List>
      </>
    );
  }
}
