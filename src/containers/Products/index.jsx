import React, { Component, memo } from 'react';
import { maxBy, minBy, toInt } from 'csssr-school-utils';
import { ProductsSearchForm, DiscountForm, ProductsList, EmptyProductsList } from '../../components';
import { Container, FormsContainer, ProductListContainer, Title } from '../../uikit';
import { withLogRender } from '../../hocs';
import productsList from '../../products.json';

const defaultMinPrice = minBy(p => p.price, productsList).price;
const defaultMaxPrice = maxBy(p => p.price, productsList).price;

const ProductsListWithLogger = withLogRender(ProductsList);
const DiscountFormWithLogger = memo(withLogRender(DiscountForm));
const ProductsSearchFormWithLogger = memo(withLogRender(ProductsSearchForm));

export class Products extends Component {
  state = { min: defaultMinPrice, max: defaultMaxPrice, discount: 0 };

  handleInputChange = e => this.setState({ [e.target.name]: toInt(e.target.value) });

  handleOnlyMinValue = () => productsList.filter(product => product.price >= this.state.min);
  handleOnlyMaxValue = () => productsList.filter(product => product.price <= this.state.max);
  handleMinAndMaxValue = () =>
    productsList.filter(product => product.price >= this.state.min && product.price <= this.state.max);

  handleProductsSearch = () => {
    const isPriceZero = Number(this.state.min) === 0 && Number(this.state.max) === 0;
    const isOnlyMinPricePresented = this.state.min > 0 && Number(this.state.max) === 0;
    const isOnlyMaxPricePresented = Number(this.state.min) === 0 && this.state.max > 0;

    if (isPriceZero) {
      return productsList;
    } else if (isOnlyMinPricePresented) {
      return this.handleOnlyMinValue();
    } else if (isOnlyMaxPricePresented) {
      return this.handleOnlyMaxValue();
    } else {
      return this.handleMinAndMaxValue();
    }
  };

  render() {
    let filteredProductsList = this.handleProductsSearch();

    if (this.state.discount) {
      filteredProductsList = filteredProductsList.filter(product => product.discount >= this.state.discount);
    }

    return (
      <Container>
        <section>
          <Title as="h1">Список товаров</Title>
          <ProductListContainer>
            <FormsContainer>
              <ProductsSearchFormWithLogger
                min={this.state.min}
                max={this.state.max}
                minPricePlaceholder={defaultMinPrice}
                maxPricePlaceholder={defaultMaxPrice}
                handleInputChange={this.handleInputChange}
              />
              <DiscountFormWithLogger
                title="Скидка"
                name="discount"
                value={this.state.discount}
                onChange={this.handleInputChange}
              />
            </FormsContainer>
            {!filteredProductsList || filteredProductsList.length === 0 ? (
              <EmptyProductsList />
            ) : (
              <ProductsListWithLogger products={filteredProductsList} />
            )}
          </ProductListContainer>
        </section>
      </Container>
    );
  }
}
