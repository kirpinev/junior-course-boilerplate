import React, { Component, memo } from 'react';
import { maxBy, minBy, toInt } from 'csssr-school-utils';
import {
  ProductsSearchForm,
  DiscountForm,
  ProductsList,
  EmptyProductsList,
  CategoryForm,
} from '../../components';
import { Button, Container, FormsContainer, ProductListContainer, Title } from '../../uikit';
import { withLogRender } from '../../hocs';
import { ProductsContext } from '../../context';
import productsList from '../../products.json';

const defaultMinPrice = minBy(p => p.price, productsList).price;
const defaultMaxPrice = maxBy(p => p.price, productsList).price;

const categories = Array.from(new Set(productsList.map(product => product.category)));

const ProductsListWithLogger = memo(withLogRender(ProductsList));
const DiscountFormWithLogger = memo(withLogRender(DiscountForm));
const ProductsSearchFormWithLogger = memo(withLogRender(ProductsSearchForm));
const CategoryFormWithLogger = memo(withLogRender(CategoryForm));

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: defaultMinPrice,
      max: defaultMaxPrice,
      categories: categories,
      selectedCategories: [],
      discount: 0,
    };
  }

  componentDidMount() {
    const selectedCategories = window.location.pathname.substr(1)
      ? new URLSearchParams(window.location.pathname.substr(1)).getAll('categories')[0].split(',')
      : [];
    window.history.replaceState({ selectedCategories }, 'selectedCategories', window.location.pathname);

    this.setState({
      selectedCategories,
    });

    window.addEventListener('popstate', this.setFromHistory);
  }

  componentDidUpdate() {
    if (this.state.selectedCategories.length === 0) {
      window.history.replaceState({ selectedCategories: [] }, '', '/');
    }
  }

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

  setFromHistory = e => {
    this.setState({
      selectedCategories: e.state['selectedCategories'],
    });
  };

  handleCategoryChange = category => {
    if (this.state.selectedCategories.includes(category)) {
      const filteredCategories = this.state.selectedCategories.filter(
        selectedCategory => selectedCategory !== category
      );

      this.setState({
        selectedCategories: filteredCategories,
      });

      window.history.pushState(
        { selectedCategories: filteredCategories },
        'selectedCategories',
        new URLSearchParams({ categories: filteredCategories.join(',') }).toString()
      );
    } else {
      const concatCategories = [...this.state.selectedCategories, category];

      this.setState({
        selectedCategories: concatCategories,
      });

      window.history.pushState(
        { selectedCategories: concatCategories },
        'selectedCategories',
        new URLSearchParams({ categories: concatCategories.join(',') }).toString()
      );
    }
  };

  handleFiltersReset = () => {
    this.setState({
      min: defaultMinPrice,
      max: defaultMaxPrice,
      categories: categories,
      selectedCategories: [],
      discount: 0,
    });
    window.history.pushState({ selectedCategories: [] }, '', '/');
  };

  render() {
    let filteredProductsList = this.handleProductsSearch();

    if (this.state.discount) {
      filteredProductsList = filteredProductsList.filter(product => product.discount >= this.state.discount);
    }

    if (this.state.selectedCategories.length) {
      filteredProductsList = filteredProductsList.filter(product =>
        this.state.selectedCategories.includes(product.category)
      );
    }

    return (
      <ProductsContext.Provider
        value={{
          ...this.state,
          defaultMinPrice,
          defaultMaxPrice,
          categories,
          products: filteredProductsList,
          handleCategoryChange: this.handleCategoryChange,
          handleInputChange: this.handleInputChange,
        }}
      >
        <Container>
          <section>
            <Title as="h1">Список товаров</Title>
            <ProductListContainer>
              <FormsContainer>
                <ProductsSearchFormWithLogger />
                <DiscountFormWithLogger />
                <CategoryFormWithLogger />
                <Button marginRight="48px" marginTop="24px" onClick={this.handleFiltersDelete}>
                  Сбросить фильтры
                </Button>
              </FormsContainer>
              {!filteredProductsList || filteredProductsList.length === 0 ? (
                <EmptyProductsList />
              ) : (
                <ProductsListWithLogger />
              )}
            </ProductListContainer>
          </section>
        </Container>
      </ProductsContext.Provider>
    );
  }
}
