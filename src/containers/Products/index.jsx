import React, { useCallback, useState } from 'react';
import { ProductsSearchForm, ProductsList } from '../../components';
import { Container, ProductListContainer, Title } from '../../uikit';
import productsList from '../../products.json';

const sortedProductsList = productsList.sort((a, b) => a.price - b.price);
const minPricePlaceholder = sortedProductsList[0].price;
const maxPricePlaceholder = sortedProductsList[sortedProductsList.length - 1].price;

export const Products = () => {
  const [products, setProducts] = useState(productsList);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleMinPriceChange = useCallback(e => setMinPrice(Math.abs(e.target.value)), []);
  const handleMaxPriceChange = useCallback(e => setMaxPrice(Math.abs(e.target.value)), []);

  const handleOnlyMinValue = useCallback(() => {
    const filteredProducts = productsList.filter(product => product.price >= minPrice);
    setProducts(filteredProducts);
  }, [minPrice]);
  const handleOnlyMaxValue = useCallback(() => {
    const filteredProducts = productsList.filter(product => product.price <= maxPrice);
    setProducts(filteredProducts);
  }, [maxPrice]);
  const handleMinAndMaxValue = useCallback(() => {
    const filteredProducts = productsList.filter(
      product => product.price >= minPrice && product.price <= maxPrice
    );
    setProducts(filteredProducts);
  }, [maxPrice, minPrice]);

  const handleProductsSearch = useCallback(
    e => {
      e.preventDefault();

      const isPriceZero = minPrice === 0 && maxPrice === 0;
      const isOnlyMinPricePresented = minPrice > 0 && maxPrice === 0;
      const isOnlyMaxPricePresented = minPrice === 0 && maxPrice > 0;

      if (isPriceZero) {
        setProducts(productsList);
      } else if (isOnlyMinPricePresented) {
        handleOnlyMinValue();
      } else if (isOnlyMaxPricePresented) {
        handleOnlyMaxValue();
      } else {
        handleMinAndMaxValue();
      }
    },
    [handleMinAndMaxValue, handleOnlyMaxValue, handleOnlyMinValue, maxPrice, minPrice]
  );

  return (
    <Container>
      <section>
        <Title as="h1">Список товаров</Title>
        <ProductListContainer>
          <ProductsSearchForm
            minPrice={minPrice}
            maxPrice={maxPrice}
            minPricePlaceholder={minPricePlaceholder}
            maxPricePlaceholder={maxPricePlaceholder}
            handleMinPriceChange={handleMinPriceChange}
            handleMaxPriceChange={handleMaxPriceChange}
            handleProductsSearch={handleProductsSearch}
          />
          <ProductsList products={products} />
        </ProductListContainer>
      </section>
    </Container>
  );
};
