import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import { ProductsList, EmptyProductsList } from '../../components';
import { Button, Container, FormsContainer, ProductListContainer, Title } from '../../uikit';
import CategoryForm from '../CategoryForm';
import ProductsSearchForm from '../ProductsSearchForm';
import DiscountForm from '../DiscountForm';
import { withLogRender } from '../../hocs';
import { ProductsContext } from '../../context';
import productsList from '../../products.json';

const ProductsListWithLogger = memo(withLogRender(ProductsList));
const DiscountFormWithLogger = memo(withLogRender(DiscountForm));
const ProductsSearchFormWithLogger = memo(withLogRender(ProductsSearchForm));
const CategoryFormWithLogger = memo(withLogRender(CategoryForm));

class Products extends Component {
  componentDidMount() {
    const selectedCategories = window.location.pathname.substr(1)
      ? new URLSearchParams(window.location.pathname.substr(1)).getAll('categories')[0].split(',')
      : [];
    window.history.replaceState({ selectedCategories }, 'selectedCategories', window.location.pathname);

    this.props.updateSelectedCategories(selectedCategories);

    window.addEventListener('popstate', this.setFromHistory);
  }

  componentDidUpdate() {
    if (this.props.selectedCategories.length === 0) {
      window.history.replaceState({ selectedCategories: [] }, '', '/');
    }
  }

  handleOnlyMinValue = () => productsList.filter(product => product.price >= this.props.min);
  handleOnlyMaxValue = () => productsList.filter(product => product.price <= this.props.max);
  handleMinAndMaxValue = () =>
    productsList.filter(product => product.price >= this.props.min && product.price <= this.props.max);

  handleProductsSearch = () => {
    const isPriceZero = Number(this.props.min) === 0 && Number(this.props.max) === 0;
    const isOnlyMinPricePresented = this.props.min > 0 && Number(this.props.max) === 0;
    const isOnlyMaxPricePresented = Number(this.props.min) === 0 && this.props.max > 0;

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
    this.props.updateSelectedCategories(e.state['selectedCategories']);
  };

  handleCategoryChange = category => {
    if (this.props.selectedCategories.includes(category)) {
      const filteredCategories = this.props.selectedCategories.filter(
        selectedCategory => selectedCategory !== category
      );

      this.props.updateSelectedCategories(filteredCategories);

      window.history.pushState(
        { selectedCategories: filteredCategories },
        'selectedCategories',
        new URLSearchParams({ categories: filteredCategories.join(',') }).toString()
      );
    } else {
      const concatCategories = [...this.props.selectedCategories, category];

      this.props.updateSelectedCategories(concatCategories);

      window.history.pushState(
        { selectedCategories: concatCategories },
        'selectedCategories',
        new URLSearchParams({ categories: concatCategories.join(',') }).toString()
      );
    }
  };

  handleFiltersReset = () => {
    this.props.resetSearchParams();
    window.history.pushState({ selectedCategories: [] }, '', '/');
  };

  render() {
    let filteredProductsList = this.handleProductsSearch();

    if (this.props.discount) {
      filteredProductsList = filteredProductsList.filter(product => product.discount >= this.props.discount);
    }

    if (this.props.selectedCategories.length) {
      filteredProductsList = filteredProductsList.filter(product =>
        this.props.selectedCategories.includes(product.category)
      );
    }

    return (
      <ProductsContext.Provider
        value={{
          products: filteredProductsList,
          handleCategoryChange: this.handleCategoryChange,
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
                <Button marginRight="48px" marginTop="24px" onClick={this.handleFiltersReset}>
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

const mapStateTopProps = state => ({
  min: state.price.min,
  max: state.price.max,
  discount: state.discount,
  selectedCategories: state.selectedCategories,
});

const mapDispatchToProps = dispatch => ({
  updateSelectedCategories: categories =>
    dispatch({
      type: 'UPDATE_CATEGORIES',
      payload: categories,
    }),
  resetSearchParams: () =>
    dispatch({
      type: 'RESET',
    }),
});

export default connect(mapStateTopProps, mapDispatchToProps)(Products);
