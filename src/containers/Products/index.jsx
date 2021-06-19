import React, { useCallback, useMemo, useState } from 'react';
import { maxBy, minBy, toInt } from 'csssr-school-utils';
import { ProductsSearchForm, ProductsList } from '../../components';
import { Container, ProductListContainer, Title } from '../../uikit';
import productsList from '../../products.json';

export const Products = () => {
  const [products, setProducts] = useState(productsList);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const minPricePlaceholder = useMemo(() => minBy(p => p.price, productsList), []);
  const maxPricePlaceholder = useMemo(() => maxBy(p => p.price, productsList), []);

  const handleMinPriceChange = useCallback(e => setMinPrice(toInt(e.target.value)), []);
  const handleMaxPriceChange = useCallback(e => setMaxPrice(toInt(e.target.value)), []);

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

      const isPriceZero = Number(minPrice) === 0 && Number(maxPrice) === 0;
      const isOnlyMinPricePresented = minPrice > 0 && Number(maxPrice) === 0;
      const isOnlyMaxPricePresented = Number(minPrice) === 0 && maxPrice > 0;

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
            minPricePlaceholder={minPricePlaceholder.price}
            maxPricePlaceholder={maxPricePlaceholder.price}
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
