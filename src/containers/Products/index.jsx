import React from 'react';
import { maxBy, minBy, toInt } from 'csssr-school-utils';
import { ProductsSearchForm, ProductsList, EmptyProductsList, LogRender } from '../../components';
import { Container, ProductListContainer, Title } from '../../uikit';
import productsList from '../../products.json';

export class Products extends LogRender {
  state = { products: productsList, minPrice: '', maxPrice: '' };

  minPricePlaceholder = minBy(p => p.price, productsList);
  maxPricePlaceholder = maxBy(p => p.price, productsList);

  handleMinPriceChange = e => this.setState({ minPrice: toInt(e.target.value) });
  handleMaxPriceChange = e => this.setState({ maxPrice: toInt(e.target.value) });

  handleOnlyMinValue = () => {
    const filteredProducts = productsList.filter(product => product.price >= this.state.minPrice);
    this.setState({ products: filteredProducts });
  };
  handleOnlyMaxValue = () => {
    const filteredProducts = productsList.filter(product => product.price <= this.state.maxPrice);
    this.setState({ products: filteredProducts });
  };
  handleMinAndMaxValue = () => {
    const filteredProducts = productsList.filter(
      product => product.price >= this.state.minPrice && product.price <= this.state.maxPrice
    );
    this.setState({ products: filteredProducts });
  };

  handleProductsSearch = e => {
    e.preventDefault();

    const isPriceZero = Number(this.state.minPrice) === 0 && Number(this.state.maxPrice) === 0;
    const isOnlyMinPricePresented = this.state.minPrice > 0 && Number(this.state.maxPrice) === 0;
    const isOnlyMaxPricePresented = Number(this.state.minPrice) === 0 && this.state.maxPrice > 0;

    if (isPriceZero) {
      this.setState({ products: productsList });
    } else if (isOnlyMinPricePresented) {
      this.handleOnlyMinValue();
    } else if (isOnlyMaxPricePresented) {
      this.handleOnlyMaxValue();
    } else {
      this.handleMinAndMaxValue();
    }
  };

  render() {
    return (
      <Container>
        <section>
          <Title as="h1">Список товаров</Title>
          <ProductListContainer>
            <ProductsSearchForm
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
              minPricePlaceholder={this.minPricePlaceholder.price}
              maxPricePlaceholder={this.maxPricePlaceholder.price}
              handleMinPriceChange={this.handleMinPriceChange}
              handleMaxPriceChange={this.handleMaxPriceChange}
              handleProductsSearch={this.handleProductsSearch}
            />
            {!this.state.products || this.state.products.length === 0 ? (
              <EmptyProductsList />
            ) : (
              <ProductsList products={this.state.products} />
            )}
          </ProductListContainer>
        </section>
      </Container>
    );
  }
}
